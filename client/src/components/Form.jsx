import React, { useState } from "react";

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
    <path d="M5 12h14" />
    <path d="M12 5v14" />
    </svg>
  );
}

const Form = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        <button onClick={() => setIsOpen(!isOpen)} style={{ backgroundColor: '#007bff', color: 'white', borderRadius: '50%', padding: '10px' }}>
          <PlusIcon width={20} height={20} />
        </button>
      </div>
      {isOpen && (
        <div style = {{ position: 'fixed', bottom: '70px', right: '20px', backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px', padding: '20px', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' }}>
          <h3>Contact Us</h3>
          <p>Fill out the form below and we'll get back to you as soon as possible.</p>
          <form>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" style={{ width: '100%', padding: '8px', marginTop: '5px', minHeight: '100px' }}></textarea>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px' }}>
                Submit
              </button>
              <button type="button" onClick={() => setIsOpen(false)} style={{ backgroundColor: '#ccc', color: 'black', padding: '10px 20px', border: 'none', borderRadius: '4px' }}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Form;
