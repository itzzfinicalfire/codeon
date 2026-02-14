import React from 'react';
import StartHereBanner from './StartHereBanner';

const TermsConditionsPage: React.FC = () => {
  return (
    <div className="bg-[#050b14] min-h-screen pt-20 font-sans text-white">
      <div className="relative bg-[#0a101d] border-b border-white/5 py-16">
          <div className="max-w-4xl mx-auto px-4">
              <h1 className="font-display font-black text-4xl md:text-5xl text-white uppercase tracking-tight mb-4">
                  TERMS & CONDITIONS
              </h1>
              <p className="text-gray-400 text-sm">Last updated: February 13, 2026</p>
          </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="space-y-12 text-gray-300 leading-relaxed text-sm md:text-base">
              
              <p>
                  Welcome to Codoen Hosting. These Terms and Conditions govern your use of our website and the purchase and use of products/services from our platform. By accessing and using our website, you agree to comply with these terms. Please read them carefully before proceeding with any transactions.
              </p>

              <section>
                  <h2 className="font-display font-bold text-2xl text-white mb-4">USE OF THE WEBSITE & SERVICES</h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-400">
                      <li>You must be at least 13 years old to use our website or make purchases. If under 18, you must have parental consent.</li>
                      <li>You are responsible for maintaining the confidentiality of your account information, including your username and password.</li>
                      <li>You agree to provide accurate and current information during the registration and checkout process.</li>
                      <li>You may not use our website or services for any unlawful or unauthorized purposes, including but not limited to hosting malicious content, phishing sites, or launching DDoS attacks.</li>
                  </ul>
              </section>

              <section>
                  <h2 className="font-display font-bold text-2xl text-white mb-4">PRODUCT INFORMATION AND PRICING</h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-400">
                      <li>We strive to provide accurate product descriptions, specs, and pricing information. However, we do not guarantee the accuracy or completeness of such information.</li>
                      <li>Prices are subject to change without notice. Any promotions or discounts are valid for a limited time and may be subject to additional terms and conditions.</li>
                  </ul>
              </section>

              <section>
                  <h2 className="font-display font-bold text-2xl text-white mb-4">ORDERS AND PAYMENTS</h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-400">
                      <li>By placing an order on our website, you are making an offer to purchase the selected services.</li>
                      <li>We reserve the right to refuse or cancel any order for any reason, including but not limited to stock availability, errors in pricing, or suspected fraudulent activity.</li>
                      <li>You agree to provide valid and up-to-date payment information and authorize us to charge the total order amount, including applicable taxes, to your chosen payment method.</li>
                      <li>We use trusted third-party payment processors to handle your payment information securely. We do not store or have access to your full payment details.</li>
                  </ul>
              </section>

              <section>
                  <h2 className="font-display font-bold text-2xl text-white mb-4">SERVICE PROVISIONING</h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-400">
                      <li>We will make reasonable efforts to ensure timely setup and provisioning of your orders (typically instant for Game Servers).</li>
                      <li>Dedicated servers may require manual provisioning time, which is estimated at checkout.</li>
                  </ul>
              </section>

              <section>
                  <h2 className="font-display font-bold text-2xl text-white mb-4">RETURNS AND REFUNDS</h2>
                  <p>
                      Our Returns and Refund Policy governs the process and conditions for cancellations and seeking refunds. Please refer to the Refund Policy page provided on our website for more detailed information.
                  </p>
              </section>

              <section>
                  <h2 className="font-display font-bold text-2xl text-white mb-4">INTELLECTUAL PROPERTY</h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-400">
                      <li>All content and materials on our website, including but not limited to text, images, logos, and graphics, are protected by intellectual property rights and are the property of Codoen Hosting or its licensors.</li>
                      <li>You may not use, reproduce, distribute, or modify any content from our website without our prior written consent.</li>
                  </ul>
              </section>

              <section>
                  <h2 className="font-display font-bold text-2xl text-white mb-4">LIMITATION OF LIABILITY</h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-400">
                      <li>In no event shall Codoen Hosting, its directors, employees, or affiliates be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website or the purchase and use of our products (including data loss).</li>
                      <li>We make no warranties or representations, express or implied, regarding the quality, accuracy, or suitability of the products offered on our website.</li>
                  </ul>
              </section>

              <section>
                  <h2 className="font-display font-bold text-2xl text-white mb-4">AMENDMENTS AND TERMINATION</h2>
                  <p>
                      We reserve the right to modify, update, or terminate these Terms and Conditions at any time without prior notice. It is your responsibility to review these terms periodically for any changes.
                  </p>
              </section>

          </div>
      </div>

      <StartHereBanner />
    </div>
  );
};

export default TermsConditionsPage;