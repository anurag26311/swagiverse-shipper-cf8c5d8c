
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, FileText, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="h-6 w-6 text-brand-600" />
            <h1 className="text-4xl font-bold text-gray-900">Refund Policy</h1>
          </div>
          <p className="text-gray-500 mb-8">Last updated: April 1, 2025</p>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-brand-600" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  At ReWorks, we strive to ensure complete satisfaction with our swag management platform and services. This Refund Policy outlines our procedures regarding refunds for our different service offerings.
                </p>
                <p className="text-gray-700">
                  Please read this policy carefully to understand your rights and obligations when requesting a refund. By using our services, you agree to the terms of this Refund Policy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-brand-600" />
                  Platform Subscription Refunds
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  For our swag management platform subscriptions:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                  <li><strong>Monthly Subscriptions:</strong> You may cancel your subscription at any time. However, we do not provide refunds for partial month subscription periods.</li>
                  <li><strong>Annual Subscriptions:</strong> If you cancel within 14 days of your initial purchase, you may request a full refund. After 14 days, you may cancel your subscription, but we will not provide a prorated refund for the unused portion of your subscription.</li>
                </ul>
                <p className="text-gray-700">
                  To cancel your subscription, please contact our customer support team through your account dashboard or via email.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-brand-600" />
                  Swag Product Refunds
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  For physical swag products ordered through our platform:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                  <li><strong>Custom Products:</strong> Due to the customized nature of branded merchandise, custom swag products cannot be returned or refunded unless they are defective or significantly different from what was ordered.</li>
                  <li><strong>Defective Products:</strong> If you receive defective or damaged products, please contact us within 7 days of receipt. We may request photos of the defective items. Once verified, we will either replace the items or provide a refund.</li>
                  <li><strong>Incorrect Orders:</strong> If you receive incorrect items, please contact us within 7 days of receipt. We will work to resolve the issue by either sending the correct items or providing a refund.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-brand-600" />
                  Kitting and Fulfillment Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  For our kitting and fulfillment services:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                  <li><strong>Service Fees:</strong> Kitting and assembly service fees are non-refundable once the service has been initiated.</li>
                  <li><strong>Shipping Errors:</strong> If there are errors in shipping or fulfillment that are our responsibility, we will work to rectify the situation at our expense.</li>
                  <li><strong>Cancellation:</strong> If you cancel a kitting or fulfillment order before work has begun, we will provide a full refund. If work has already begun, we may charge a percentage based on the work completed.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-brand-600" />
                  Refund Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  When a refund is approved:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                  <li>Refunds will be credited back to the original method of payment used for the purchase.</li>
                  <li>Processing time for refunds typically takes 5-10 business days, depending on your payment provider.</li>
                  <li>You will receive an email confirmation when your refund has been processed.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-brand-600" />
                  Exceptions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We reserve the right to make exceptions to this policy at our discretion. Factors we may consider include:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                  <li>Customer history and relationship</li>
                  <li>Nature of the issue</li>
                  <li>Time elapsed since purchase</li>
                  <li>Extenuating circumstances</li>
                </ul>
                <p className="text-gray-700">
                  Please note that any exceptions made are done on a case-by-case basis and do not set a precedent for future refund requests.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-brand-600" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  If you have questions about our Refund Policy or wish to request a refund, please contact our customer support team at:{' '}
                  <a href="mailto:contact@reworks.tech" className="text-brand-600 hover:underline">
                    contact@reworks.tech
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
