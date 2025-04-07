
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, FileText, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="h-6 w-6 text-brand-600" />
            <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="text-gray-500 mb-8">Last updated: April 1, 2025</p>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-brand-600" />
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  At ReWorks, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our swag management platform.
                </p>
                <p className="text-gray-700">
                  Please read this Privacy Policy carefully. By accessing or using our platform, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-brand-600" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We may collect several types of information from and about users of our platform, including:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                  <li>Personal identifiers such as name, email address, and company information.</li>
                  <li>Information about your company and its swag management needs.</li>
                  <li>Information about your internet connection, the equipment you use to access our platform, and usage details.</li>
                  <li>Transactional data including products ordered, shipping information, and payment details.</li>
                </ul>
                <p className="text-gray-700">
                  We collect this information directly from you when you provide it to us, automatically as you navigate through the platform, and from third parties such as our business partners.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-brand-600" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We may use the information we collect about you for various purposes, including:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                  <li>Providing, maintaining, and improving our platform and services.</li>
                  <li>Processing transactions and sending related information including confirmations and invoices.</li>
                  <li>Sending administrative information, such as updates to our terms, conditions, and policies.</li>
                  <li>Providing customer support and responding to your requests or inquiries.</li>
                  <li>Sending promotional communications about new services, special offers, or other information we think you may find interesting.</li>
                  <li>Analyzing usage patterns and trends to enhance user experience.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-brand-600" />
                  Disclosure of Your Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We may disclose personal information that we collect or you provide:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                  <li>To our subsidiaries and affiliates.</li>
                  <li>To contractors, service providers, and other third parties we use to support our business.</li>
                  <li>To fulfill the purpose for which you provide it.</li>
                  <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request.</li>
                  <li>To enforce our Terms of Use and other agreements.</li>
                  <li>If we believe disclosure is necessary to protect the rights, property, or safety of ReWorks, our customers, or others.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-brand-600" />
                  Data Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information from accidental loss, unauthorized access, use, alteration, and disclosure.
                </p>
                <p className="text-gray-700">
                  However, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our platform.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-brand-600" />
                  Your Choices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We strive to provide you with choices regarding the personal information you provide to us. You can:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                  <li>Update your account information through your account settings.</li>
                  <li>Opt-out of marketing emails by clicking the "unsubscribe" link.</li>
                  <li>Request access to, correction, or deletion of your personal information by contacting us.</li>
                </ul>
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
                  If you have any questions about this Privacy Policy, please contact us at:{' '}
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

export default PrivacyPolicy;
