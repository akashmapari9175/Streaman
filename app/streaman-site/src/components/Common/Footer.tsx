export default function Footer() {
  return (
    <footer className="border-t border-orange-200 py-8 mt-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Left Section */}
        <div className="text-center md:text-left md:w-1/3">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <span className="text-2xl">🐶</span>
            <h2 className="text-xl font-semibold">Bruno</h2>
          </div>
          <p className="text-gray-600 mt-2">
            <span>
              We re a passionate group of individuals on a mission to build the
              Best API Client for Developers.
            </span>
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap justify-center md:justify-between gap-10 mt-6 md:mt-0">
          <div>
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li>About</li>
              <li>Manifesto</li>
              <li>Terms</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Resources</h3>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li>Bruno Vs Postman</li>
              <li>Documentation</li>
              <li>Support</li>
              <li>Changelog</li>
              <li>Release Notes</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Community</h3>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li>Discord</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-8 text-sm">
        All rights reserved ©2024 Bruno Software Inc.
      </div>
    </footer>
  );
}
