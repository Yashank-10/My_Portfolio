export default function Footer() {
  return (
    <footer className="bg-white-100 px-6 sm:px-10 py-8 sm:py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">Have a project in mind?</h3>
            <a href="mailto:yashanksal10@gmail.com" className="text-lg sm:text-xl text-gray-800 hover:text-black transition-colors">
              yashanksal10@gmail.com
            </a>
          </div>

          <div className="md:ml-auto md:text-right">
            <h4 className="text-xl sm:text-2xl font-semibold mb-3">Get in Touch</h4>
            <div className="flex items-center gap-5 md:justify-end">
              <a href="https://github.com/Yashank-10" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-black hover:opacity-70 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                  <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.72.08-.72 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.77.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.91 0-1.31.47-2.38 1.23-3.23-.12-.3-.53-1.53.12-3.2 0 0 1-.32 3.3 1.23a11.45 11.45 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.67.25 2.9.13 3.2.77.85 1.23 1.92 1.23 3.23 0 4.59-2.82 5.6-5.51 5.9.43.38.82 1.11.82 2.24v3.32c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/yashank-saluja-83a992287/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-black hover:opacity-70 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                  <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.68H9.32V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77A1.78 1.78 0 0 0 0 1.78v20.44C0 23.2.8 24 1.77 24h20.45A1.78 1.78 0 0 0 24 22.22V1.78C24 .8 23.2 0 22.22 0Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gray-300 my-7" />

        <p className="text-center text-base sm:text-lg text-gray-900">
          Built with <span className="text-red-500">❤</span> and probably too much coffee
        </p>
      </div>
    </footer>
  )
}
