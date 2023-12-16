import React, { useState } from 'react'
import { sanitize } from './miscellaneous';
import Loading from './Loading';

const SubmitFormBottom = ({ status, message, onValidated}) => {

    const [ error, setError ] = useState(null);
  const [ email, setEmail ] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {

    setError(null);

    if ( ! email ) {
      setError( 'Please enter a valid email address' );
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  }

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = ( event ) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  }

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if ( !message ) {
      return null;
    }
    const result = message?.split('-') ?? null;
    if ( "0" !== result?.[0]?.trim() ) {
      return sanitize(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? sanitize( formattedMessage ) : null;
  }
  return (
    <div className="style__InsetContentContainer-sc-6fdcc87e-2 fbiPrQ">
        <h5 className="dist__StyledText-sc-630f0a6f-12 kDwrNU style__NewsletterHeading-sc-a900d4a8-3 bFldgr">Become smarter in just 5 minutes</h5>
            <div className="style__CtaBody-sc-a900d4a8-1 jVsVkl">
                <p className="dist__StyledText-sc-630f0a6f-12 RXKux">Get the daily email that makes reading the news enjoyable. Stay informed and entertained, for free.</p>
            </div>
            <form className="dist__BaseForm-1-sc-630f0a6f-30 dist__StyledSquaredForm-1-sc-630f0a6f-38 hwjhDI kklAbF style__Form-sc-a900d4a8-2 loZYFA">
                <input 
                    onChange={(event) => setEmail(event?.target?.value ?? '')}
                    type="email" 
                    placeholder="Enter Email" 
                    name="email" 
                    onKeyUp={(event) => handleInputKeyEvent(event)}
                    className="dist__BaseInput-sc-630f0a6f-27 dist__StyledInput-sc-630f0a6f-28 dist__StyledSquaredInput-1-sc-630f0a6f-39 iqqrLh ddGvFv jDJMSE"
                />
                <style data-emotion="css 1y1pkfw"/>
                <button 
                    type="submit" 
                    class="chakra-button css-1y1pkfw"
                    onClick={handleFormSubmit}
                    >Try it</button>

                </form>
                <div className="min-h-42px">
        { 'sending' === status ? <Loading showSpinner message="Sending..." contentColorClass="text-white" hasVisibilityToggle={false}/> : null }
        {'error' === status || error ? (
          <div
            className="text-red-700 pt-2"
            dangerouslySetInnerHTML={{ __html: error || getMessage( message ) }}
          />
        ) : null }
        {'success' === status && 'error' !== status && !error && (
          <div className="text-green-200 font-bold pt-2" dangerouslySetInnerHTML={{ __html: sanitize(message) }} />
        )}
      </div>
    </div>
  )
}

export default SubmitFormBottom
