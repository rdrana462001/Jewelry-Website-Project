export default function Footer() {
  return (
    <footer className="bg-kalyan-maroon text-white pt-16 pb-8 border-t-4 border-kalyan-gold">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand & Newsletter */}
        <div>
          <h2 className="font-serif text-3xl font-bold tracking-wider mb-2">Kalyan</h2>
          <p className="text-[10px] tracking-widest text-kalyan-gold uppercase font-semibold mb-6">Jewellers</p>
          <p className="text-sm text-gray-300 mb-4 leading-relaxed">
            Subscribe to our newsletter to receive updates on new collections and special offers.
          </p>
          <div className="flex border border-white/30 rounded-sm overflow-hidden">
            <input type="email" placeholder="Your Email Address" className="bg-transparent px-4 py-2 text-sm w-full outline-none text-white placeholder:text-gray-400" />
            <button className="bg-white text-kalyan-maroon px-4 py-2 text-sm font-semibold hover:bg-gray-100 transition-colors">
              JOIN
            </button>
          </div>
        </div>

        {/* Links 1 */}
        <div>
          <h4 className="font-semibold text-lg mb-6 text-kalyan-gold">About Us</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Management Team</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Investors</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Store Locator</a></li>
          </ul>
        </div>

        {/* Links 2 */}
        <div>
          <h4 className="font-semibold text-lg mb-6 text-kalyan-gold">Policies</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Return Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping Information</a></li>
          </ul>
        </div>

        {/* Links 3 */}
        <div>
          <h4 className="font-semibold text-lg mb-6 text-kalyan-gold">Collections</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">Muhurat</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Mudhra</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Nimah</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Anokhi</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>&copy; {new Date().getFullYear()} Kalyan Jewellers. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Facebook</a>
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">YouTube</a>
        </div>
      </div>
    </footer>
  );
}
