
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, Shield, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="h-6 w-6 text-brand-600" />
            <h1 className="text-4xl font-bold text-gray-900">Terms of Use</h1>
          </div>
          <p className="text-gray-500 mb-8">Last updated: April 1, 2025</p>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-brand-600" />
                  Agreement to Terms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  By accessing or using the ReWorks platform, website, and services, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.
                </p>
                <p className="text-gray-700">
                  These Terms constitute a legally binding agreement between you and ReWorks governing your access to and use of the platform, including any content, functionality, and services offered.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-brand-600" />
                  Account Registration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  To use certain features of our platform, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                </p>
                <p className="text-gray-700">
                  You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized access to or use of your account.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-brand-600" />
                  Intellectual Property Rights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  The ReWorks platform, including its original content, features, and functionality, is owned by ReWorks and is protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <p className="text-gray-700">
                  Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of ReWorks.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-brand-600" />
                  User Conduct
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  You may use our platform only for lawful purposes and in accordance with these Terms. You agree not to use our platform:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                  <li>In any way that violates any applicable law or regulation.</li>
                  <li>To transmit or procure the sending of any advertising or promotional material without our prior consent.</li>
                  <li>To impersonate or attempt to impersonate ReWorks, a ReWorks employee, another user, or any other person or entity.</li>
                  <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the platform.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-brand-600" />
                  Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  In no event will ReWorks, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, including without limitation any direct, indirect, special, incidental, consequential, or punitive damages.
                </p>
                <p className="text-gray-700">
                  This includes liability arising from: loss of revenue, profits, sales, data, goodwill, or other intangible losses resulting from your access to or use of the platform.
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
                  Questions about the Terms of Use should be sent to us at:{' '}
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

export default TermsOfUse;
