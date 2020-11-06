import React, {useState} from "react";
import styled from "styled-components";
import {Button} from "../button";

const Wrapper = styled.div.attrs({
  className: "mt-5",
})`
`;

const CONVERT_KIT_FORM_URL = `https://app.convertkit.com/forms/1795118/subscriptions`;

const ConvertKitForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstname] = useState('');
  const [status, setStatus] = useState<'UNKNOWN' | 'SUCCESS' | 'ERROR'>("UNKNOWN");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target.value);
    try {
      const res = await fetch(CONVERT_KIT_FORM_URL, {
        method: 'post',
        body: formData,
        headers: {
          accept: 'application/json',
        },
      });
      setEmail('');
      setFirstname('');
      const json = await res.json();
      if (json.status === 'success') {
        setStatus('SUCCESS');
        return;
      }
    } catch (err) {
      setStatus('ERROR');
    }
  };

  const handleMailChange = (e: { target?: { value?: string; }}) => {
    const value = e.target?.value? e.target.value: "";

    console.log("Event: ", e);

    setEmail(value);
  };

  const handleFirstNameChange = (e: { target?: { value?: string; }}) => {
    const value = e.target?.value? e.target.value: "";

    console.log("Event: ", e);

    setFirstname(value)
  };

  return (
    <Wrapper>
        <header>
          <h3>Join the Newsletter</h3>
        </header>
        <main className="p-2">
          {status === 'SUCCESS' && <p>Please check your e-mail to confirm your subscription.</p>}
          {status === 'ERROR' && <p>Oops, Something went wrong! Please try again.</p>}

          {(status === 'UNKNOWN' || status === 'ERROR') &&
          <form
            action={CONVERT_KIT_FORM_URL}
            method="post"
            onSubmit={handleSubmit}
          >
            <label className="block">
              <span className="">Email&nbsp;<span className="text-red-500">*</span></span>
              <input
                className="form-input mt-1 block w-3/4 text-gray-700"
                type="email"
                name="email_address"
                placeholder="Email Address"
                aria-label="Your email"
                onChange={handleMailChange}
                value={email}
                required
              />
            </label>
            <label className="block mt-5">
              <span className="">First Name</span>
              <input
                className="form-input mt-1 block w-3/4 text-gray-700"
                type="text"
                name="fields[first_name]"
                placeholder="First Name"
                aria-label="First Name"
                onChange={handleFirstNameChange}
                value={firstName}
                required
              />
            </label>
            <div className="mt-5">
              <span className="text-sm">We need this information to be able to contact you about the progress of this project. We value your privacy and won't share the information with anyone else. The only person that will get access to it is Sébastien Dubois, the author. We won't send you spam. Unsubscribe at any time.</span>
            </div>
            <div className="mt-5">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" required />
                <span className="ml-2">I agree</span>
              </label>
            </div>
            <div className="flex mt-5">
              <Button type="submit">Subscribe</Button>
            </div>
          </form>
          }
        </main>
    </Wrapper>
  );
};

export { ConvertKitForm };
