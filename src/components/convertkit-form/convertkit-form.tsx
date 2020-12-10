import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../button";
import { useForm } from "react-hook-form";
import { faExclamationTriangle, faSadTear, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { propertiesOf } from "../../utils/utility-types";

const Wrapper = styled.div.attrs({
  className: "p-2",
})``;

const NEWSLETTER_SUBSCRIPTION_SUCCESS_MESSAGE =
  "Thanks for subscribing to the Dev Concepts newsletter. Now check your email to confirm your subscription. Once done, you'll receive the updates about the book directly in your inbox.";
const NEWSLETTER_SUBSCRIPTION_ERROR_MESSAGE = "An error occurred. Please try again..";

const CONVERT_KIT_FORM_URL = `https://app.convertkit.com/forms/1795118/subscriptions`;

interface NewsletterSubscriptionFormData {
  email: string;
  firstName: string;
  consent: boolean;
}

enum NewsletterSubscriptionFormStatus {
  UNKNOWN = "Unknown",
  SUCCESS = "Success",
  ERROR = "Error",
}

interface ConvertKitNewsletterSubscriptionResponse {
  content: {
    enable: boolean;
  };
  status: "failed" | "success";
  errors?: {
    fields: string[];
    messages: string[];
  };
}

const formDataPropertyNames = propertiesOf<NewsletterSubscriptionFormData>();

const ConvertKitForm: React.FC = () => {
  const [newsletterSubscriptionFormStatus, setNewsletterSubscriptionFormStatus] = useState<NewsletterSubscriptionFormStatus>(
    NewsletterSubscriptionFormStatus.UNKNOWN,
  );
  const { register, handleSubmit, errors, reset } = useForm<NewsletterSubscriptionFormData>();
  const onSubmit = handleSubmit(async (data: NewsletterSubscriptionFormData) => {
    if (!data || !data.consent) {
      return;
    }

    console.log(`Preparing to submit: ${JSON.stringify(data, null, 1)}`);

    // Expected by convertkit form:
    // email_address
    // fields[first_name]
    const convertKitFormData: FormData = new FormData();
    convertKitFormData.set("email_address", data.email);
    convertKitFormData.set("fields[first_name]", data.firstName);

    try {
      const subscriptionResponse = await fetch(CONVERT_KIT_FORM_URL, {
        method: "post",
        body: convertKitFormData,
        headers: {
          accept: "application/json",
        },
      });

      if (subscriptionResponse.status !== 200) {
        throw new Error(`Unexpected response status: ${subscriptionResponse.status}`);
      }

      const responseAsJson: ConvertKitNewsletterSubscriptionResponse = await subscriptionResponse.json();
      if (responseAsJson.status === "success") {
        reset();
        setNewsletterSubscriptionFormStatus(NewsletterSubscriptionFormStatus.SUCCESS);
        return;
      } else {
        throw new Error(`Subscription failed: ${JSON.stringify(responseAsJson.errors, null, 1)}`);
      }
    } catch (err) {
      console.error("Error while subscribing to the newsletter: ", err);
      setNewsletterSubscriptionFormStatus(NewsletterSubscriptionFormStatus.ERROR);
    }
  });

  return (
    <Wrapper>
      {newsletterSubscriptionFormStatus === NewsletterSubscriptionFormStatus.ERROR && (
        <div>
          <div className="mt-0 mb-3 text-devConceptsRed-400">
            <FontAwesomeIcon className="text-devConceptsRed-400 text-3xl" icon={faSadTear} />
            <span className="ml-2" aria-label="Newsletter subscription failed">
              {NEWSLETTER_SUBSCRIPTION_ERROR_MESSAGE}
            </span>
          </div>
        </div>
      )}
      {(newsletterSubscriptionFormStatus === NewsletterSubscriptionFormStatus.UNKNOWN ||
        newsletterSubscriptionFormStatus === NewsletterSubscriptionFormStatus.ERROR) && (
        <form onSubmit={onSubmit}>
          <label className="block">
            <span className="">
              Email&nbsp;<span className="text-red-500">*</span>
            </span>
            <input
              className="form-input mt-1 block w-full md:w-3/4 text-gray-700"
              type="email"
              name={formDataPropertyNames("email")}
              ref={register({ required: true })}
              placeholder="Email Address"
              aria-label="Your email"
            />
            {errors.email && (
              <div className="mt-2">
                <FontAwesomeIcon className="text-devConceptsRed-400" icon={faExclamationTriangle} />
                <span className="ml-2">An email address is required</span>
              </div>
            )}
          </label>
          <label className="block mt-5">
            <span className="">First Name</span>
            <input
              className="form-input mt-1 block w-full md:w-3/4 text-gray-700"
              type="text"
              name={formDataPropertyNames("firstName")}
              placeholder="First Name"
              aria-label="First Name"
              ref={register}
            />
          </label>
          <div className="mt-5">
            <span className="text-sm">
              We need this information to be able to contact you. We value your privacy and won't share the information with anyone. The
              only person that will get access is Sébastien Dubois, the author. We won't send you spam. Unsubscribe at any time.
            </span>
          </div>
          <div className="mt-5">
            <label className="">
              <input
                className="form-checkbox text-gray-700"
                type="checkbox"
                name={formDataPropertyNames("consent")}
                ref={register({ required: true })}
                placeholder="Data privacy consent"
                aria-label="Allow us to store your contact information"
              />
              <span className="ml-2">
                I agree&nbsp;<span className="text-red-500">*</span>
              </span>
              {errors.consent && (
                <div className="mt-2">
                  <FontAwesomeIcon className="text-devConceptsRed-400" icon={faExclamationTriangle} />
                  <span className="ml-2">You must explicitly give your consent</span>
                </div>
              )}
            </label>
          </div>
          <div className="flex mt-5 flex justify-center sm:justify-start">
            <Button type="submit" aria-label="Let me know about the progress">
              Let me know about the progress
            </Button>
          </div>
        </form>
      )}
      {newsletterSubscriptionFormStatus === NewsletterSubscriptionFormStatus.SUCCESS && (
        <div>
          <FontAwesomeIcon className="text-devConceptsGreen-400 text-3xl" icon={faCheckCircle} />
          <span className="ml-2">{NEWSLETTER_SUBSCRIPTION_SUCCESS_MESSAGE}</span>
        </div>
      )}
    </Wrapper>
  );
};

export { ConvertKitForm };
