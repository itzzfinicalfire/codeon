import React from 'react';
import StartHereBanner from './StartHereBanner';

const ReturnPolicyPage: React.FC = () => {
  return (
    <div className="bg-[#050b14] min-h-screen pt-20 font-sans text-white">
      <div className="relative bg-[#0a101d] border-b border-white/5 py-16">
          <div className="max-w-4xl mx-auto px-4">
              <h1 className="font-display font-black text-4xl md:text-5xl text-white uppercase tracking-tight mb-4">
                  REFUND POLICY
              </h1>
              <p className="text-gray-400 text-sm">Last updated: February 13, 2026</p>
          </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="space-y-12 text-gray-300 leading-relaxed text-sm md:text-base">
              
              <p>
                  Thank you for choosing Codoen Hosting. We value your satisfaction and strive to provide you with the best game server hosting experience possible. If, for any reason, you are not completely satisfied with your purchase, we are here to help.
              </p>

              <section>
                  <h2 className="font-display font-bold text-2xl text-white mb-4">RETURNS & CANCELLATIONS</h2>
                  <p className="mb-4">
                      We accept refund requests within <strong>3 days (72 hours)</strong> from the date of the initial purchase. To be eligible for a refund, you must submit a cancellation request via our billing area.
                  </p>
                  <p>
                      This policy applies to new orders for Game Servers, Web Hosting, and VPS Hosting.
                  </p>
              </section>

              <section>
                  <h2 className="font-display font-bold text-2xl text-white mb-4">REFUNDS</h2>
                  <p className="mb-4">
                      Once we receive your request and inspect the service usage, we will notify you of the status of your refund. If your return is approved, we will initiate a refund to your original method of payment.
                  </p>
                  <p>
                      Please note that the refund amount will exclude any setup fees, domain registration fees, or addon license costs incurred during the initial purchase.
                  </p>
              </section>

              <section>
                  <h2 className="font-display font-bold text-2xl text-white mb-4">NON-REFUNDABLE ITEMS</h2>
                  <p className="mb-4">Certain items and services are non-refundable. These include:</p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-400">
                      <li>Dedicated Servers (due to hardware provisioning costs).</li>
                      <li>Domain Name Registrations.</li>
                      <li>Software Licenses (e.g., cPanel, Windows Server, WHMCS).</li>
                      <li>Personalized or custom-made configurations.</li>
                      <li>Funds added to the account credit balance.</li>
                  </ul>
              </section>

              <section>
                  <h2 className="font-display font-bold text-2xl text-white mb-4">SERVICE ISSUES</h2>
                  <p className="mb-4">
                      In the unfortunate event that your service is inaccessible due to a fault on our end (e.g., hardware failure, network outage exceeding SLA), please contact us immediately. We will arrange for a service credit or issue a refund, depending on your preference and the severity of the issue.
                  </p>
              </section>

              <section>
                  <h2 className="font-display font-bold text-2xl text-white mb-4">PROCESSING TIME</h2>
                  <p className="mb-4">
                      Refunds will be processed within 5-7 business days after we approve your request. Please note that it may take additional time for the refund to appear in your bank account, depending on your payment provider.
                  </p>
              </section>

              <section>
                  <h2 className="font-display font-bold text-2xl text-white mb-4">CONTACT US</h2>
                  <p>
                      If you have any questions or concerns regarding our refund policy, please contact our customer support team via a billing ticket. We are here to assist you and ensure your hosting experience with us is enjoyable and hassle-free.
                  </p>
              </section>

          </div>
      </div>

      <StartHereBanner />
    </div>
  );
};

export default ReturnPolicyPage;