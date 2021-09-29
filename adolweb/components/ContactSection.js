
const ContactSection = () => {
    return (
      <section>
      <div className="container px-6 md:px-0 mx-auto md:w-1/3 text-center py-8 my-12">
      <h2 className="text-black font-semibold text-4xl md:text-6xl">Chat With Us</h2>
      <div className="flex flex-col my-4">
        <p className="font-normal text-gray-400 md:text-xl">Via Telegram</p>
        <p className="text-black font-normal text-3xl md:text-4xl">@adolweb</p>
      </div>
      <div className="flex flex-col my-4">
        <p className="font-normal text-gray-400 md:text-xl">Via Whatsapp</p>
        <p className="text-black font-normal text-3xl md:text-4xl">+62 858 7605 4679</p>
      </div>
      <div className="flex flex-col my-4">
        <p className="font-normal text-gray-400 md:text-xl">Via Email</p>
        <p className="text-black font-normal text-3xl md:text-4xl">Hello@adolweb.com</p>
      </div>
      </div>
    </section>
    )
}

export default ContactSection;
