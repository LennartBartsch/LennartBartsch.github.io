export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <div className="max-w-md mx-auto">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Your name" 
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="your.email@example.com" 
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">Message</label>
            <textarea 
              id="message" 
              rows={4} 
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
          >
            Send Message
          </button>
        </form>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Connect with me</h2>
          <p>Email: your.email@example.com</p>
          <p>GitHub: <a href="https://github.com/LennartBartsch" className="text-blue-500 hover:underline">LennartBartsch</a></p>
        </div>
      </div>
    </div>
  );
}