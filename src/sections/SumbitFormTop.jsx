import React, { useState } from 'react'
import { sanitize } from './miscellaneous';
import Loading from './Loading';

const SumbitFormTop = ({status, message, onValidated}) => {
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
    <div className="style__SubscribeBannerContainer-sc-2a5839c1-7 jxSbiB css-0">
        <div className="style__SubscribeForm-sc-2a5839c1-8 iIHzBj">
           <h1 className="dist__StyledText-sc-630f0a6f-12 bdywXm style__CtaHeader-sc-2a5839c1-10 knpxgB" font-weight="bold">Become smarter in just 5 minutes</h1>
              <p className="dist__StyledText-sc-630f0a6f-12 dOpeuC style__StyledText-sc-2a5839c1-11 jhMjHF">Get the daily email that makes reading the news enjoyable. Stay informed and entertained, for free.</p>
                 <form className="dist__BaseForm-1-sc-630f0a6f-30 dist__StyledSquaredForm-1-sc-630f0a6f-38 hwjhDI kklAbF style__StyledInputWithAction-sc-2a5839c1-9 juSsIh">
                    <input 
                        onChange={(event) => setEmail(event?.target?.value ?? '')}
                        type="email" 
                        placeholder="youremail@domain.com" 
                        name="email" 
                        className="dist__BaseInput-sc-630f0a6f-27 dist__StyledInput-sc-630f0a6f-28 dist__StyledSquaredInput-1-sc-630f0a6f-39 iqqrLh ddGvFv jDJMSE"
                        onKeyUp={(event) => handleInputKeyEvent(event)}
                    />
                                              
                       <style data-emotion="css-u5fi7s"/>
                       <button 
                        type="submit" 
                        className="chakra-button css-u5fi7s"
                        onClick={handleFormSubmit}
                       >
                        Subscribe
                       </button>
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
    </div>
  )
}

export default SumbitFormTop
