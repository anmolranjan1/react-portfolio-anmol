import { CONTACT } from "../constants"

const Contact = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`;

  return (
    <div className="border-b border-neutral-900 pb-20">
        <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
        <div className="text-center tracking-tighter">
            {/* <p className="my-4">{CONTACT.email}</p> */}
            <a href={gmailUrl} target="_blank" rel="noopener noreferrer" className="border-b">{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact