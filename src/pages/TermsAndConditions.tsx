import { Table } from "antd";
import ArtCraftNavbar from "../components/artCraft/ArtCraftNavbar";

export default function TermsAndConditions() {
  const columns = [
    {
      title: "Index",
      dataIndex: "Index",
      key: "index",
    },
    {
      title: "Title",
      dataIndex: "Title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "Description",
      key: "description",
    },
  ];

  const dataSource = [
    {
      Index: "1",
      Title: "Affiliate",
      Description:
        "means an entity that controls, is controlled by or is under common control with a party, where control means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.",
    },
    {
      Index: "2",
      Title: "Account",
      Description:
        "means a unique account created for you to access our Service or parts of our service",
    },
    {
      Index: "3",
      Title: "Company",
      Description:
        "(referred to as either 'the Company', 'We', 'Us' or 'Our' in this Agreement) refers to Dkeralutive limited.",
    },
    {
      Index: "4",
      Title: "Country",
      Description: "refers to Nigeria",
    },
    {
      Index: "5",
      Title: "Content",
      Description:
        "refers to content such as text, images, or other information that can be posted, uploaded, linked to or otherwise made available by you, regardless of the form of that content.",
    },
    {
      Index: "6",
      Title: "Device",
      Description:
        "means any device that can access the Service such as a computer, a cellphone or a digital tablet.",
    },
    {
      Index: "7",
      Title: "Feedback",
      Description:
        "means feedback, innovations or suggestions sent by you regarding the attributes, performance or features of our Service.",
    },
    {
      Index: "8",
      Title: "Products",
      Description:
        "refer to the products or items offered for sale on the Service.",
    },
    {
      Index: "9",
      Title: "Orders",
      Description: "mean a request by you to purchase Products from Us.",
    },
    {
      Index: "10",
      Title: "Promotions",
      Description:
        "refer to contests, sweepstakes or other promotions offered through the Service.",
    },
    {
      Index: "11",
      Title: "Services",
      Description: "refers to the Website.",
    },
    {
      Index: "12",
      Title: "Terms and Conditions",
      Description:
        "(also referred as 'Terms') mean these Terms and Conditions that form the entire agreement between you and the Company regarding the use of the Service.",
    },
    {
      Index: "13",
      Title: "Third-party Social Media Service",
      Description:
        "means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.",
    },
    {
      Index: "14",
      Title: "Website",
      Description: "refers to https://dkerulative.com.ng",
    },
    {
      Index: "15",
      Title: "You",
      Description:
        "means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.",
    },
  ];

  return (
    <section>
      <ArtCraftNavbar />
      <div className="mt-5">
        <h2 className="text-center font-bold">TERMS AND CONDITIONS OF USE</h2>
        <p className="text-center">
          Our Terms and Conditions were last updated on 1st June 2024.
        </p>
        <br />
        <p className="text-center">
          Please read these terms and conditions carefully before using our
          Service.
        </p>
        <br />
        <h2 className="text-center mt-3">Interpretation and Definitions</h2>
        <h6 className="text-center">
          For the purposes of these Terms and Conditions:
        </h6>

        <Table
          bordered
          className="mt-3"
          dataSource={dataSource}
          columns={columns}
          pagination={false}
        />

        <div className="mt-5">
          <h3>Acknowledgment</h3>

          <p>
            These are the Terms and Conditions governing the use of this Service
            and the agreement that operates between You and the Company. These
            Terms and Conditions set out the rights and obligations of all users
            regarding the use of the Service.
          </p>
          <br />

          <p>
            Your access to and use of the Service is conditioned on Your
            acceptance of and compliance with these Terms and Conditions. These
            Terms and Conditions apply to all visitors, users and others who
            access or use the Service.
          </p>
          <br />

          <p>
            By accessing or using the Service You agree to be bound by these
            Terms and Conditions. If You disagree with any part of these Terms
            and Conditions then You may not access the Service.
          </p>
          <br />

          <p>
            You represent that you are over the age of 18. The Company does not
            permit those under 18 to use the Service.
          </p>
          <br />

          <p>
            Your access to and use of the Service is also conditioned on Your
            acceptance of and compliance with the Privacy Policy of the Company.
            Our Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your personal information when You
            use the Application or the Website and tells You about Your privacy
            rights and how the law protects You. Please read Our Privacy Policy
            carefully before using Our Service.
          </p>
          <br />

          <h3>User Accounts</h3>

          <p>
            When You create an account with Us, You must provide Us information
            that is accurate, complete, and current at all times. Failure to do
            so constitutes a breach of the Terms, which may result in immediate
            termination of Your account on Our Service.
          </p>
          <br />

          <p>
            You are responsible for safeguarding the password that You use to
            access the Service and for any activities or actions under Your
            password, whether Your password is with Our Service or a Third-Party
            Social Media Service.
          </p>
          <br />

          <p>
            You agree not to disclose Your password to any third party. You must
            notify Us immediately upon becoming aware of any breach of security
            or unauthorized use of Your account.
          </p>
          <br />

          <p>
            You may not use as a username the name of another person or entity
            or that is not lawfully available for use, a name or trademark that
            is subject to any rights of another person or entity other than You
            without appropriate authorization, or a name that is otherwise
            offensive, vulgar or obscene.
          </p>
          <br />

          <h3>Content</h3>
          <p>Your Right to Post Content</p>
          <br />

          <p>
            Our Service allows You to post Content. You are responsible for the
            Content that You post to the Service, including its legality,
            reliability, and appropriateness.
          </p>
          <br />

          <p>
            By posting Content to the Service, You grant Us the right and
            license to use, modify, publicly perform, publicly display,
            reproduce, and distribute such Content on and through the Service.
            You retain any and all of Your rights to any Content You submit,
            post or display on or through the Service and You are responsible
            for protecting those rights. You agree that this license includes
            the right for Us to make Your Content available to other users of
            the Service, who may also use Your Content subject to these Terms.
          </p>
          <br />

          <p>
            You represent and warrant that: (i) the Content is Yours (You own
            it) or You have the right to use it and grant Us the rights and
            license as provided in these Terms, and (ii) the posting of Your
            Content on or through the Service does not violate the privacy
            rights, publicity rights, copyrights, contract rights or any other
            rights of any person.
          </p>
          <br />
          <p>Content Restrictions</p>
          <br />

          <p>
            The Company is not responsible for the content of the Service's
            users. You expressly understand and agree that You are solely
            responsible for the Content and for all activity that occurs under
            your account, whether done so by You or any third person using Your
            account.
          </p>
          <br />

          <p>
            You may not transmit any Content that is unlawful, offensive,
            upsetting, intended to disgust, threatening, libelous, defamatory,
            obscene or otherwise objectionable. Examples of such objectionable
            Content include, but are not limited to, the following:
          </p>
          <br />

          <ul>
            <li>Unlawful or promoting unlawful activity.</li>
            <li>
              Defamatory, discriminatory, or mean-spirited content, including
              references or commentary about religion, race, sexual orientation,
              gender, national/ethnic origin, or other targeted groups.
            </li>
            <li>
              Spam, machine – or randomly – generated, constituting unauthorized
              or unsolicited advertising, chain letters, any other form of
              unauthorized solicitation, or any form of lottery or gambling.
            </li>
            <li>
              Containing or installing any viruses, worms, malware, trojan
              horses, or other content that is designed or intended to disrupt,
              damage, or limit the functioning of any software, hardware or
              telecommunications equipment or to damage or obtain unauthorized
              access to any data or other information of a third person.
            </li>
            <li>
              Infringing on any proprietary rights of any party, including
              patent, trademark, trade secret, copyright, right of publicity or
              other rights.
            </li>
            <li>
              Impersonating any person or entity including the Company and its
              employees or representatives.
            </li>
            <li>Violating the privacy of any third person.</li>
            <li>False information and features.</li>
          </ul>

          <p>
            The Company reserves the right, but not the obligation, to, in its
            sole discretion, determine whether or not any Content is appropriate
            and complies with this Terms, refuse or remove this Content. The
            Company further reserves the right to make formatting and edits and
            change the manner of any Content. The Company can also limit or
            revoke the use of the Service if You post such objectionable
            Content. As the Company cannot control all content posted by users
            and/or third parties on the Service, you agree to use the Service at
            your own risk. You understand that by using the Service You may be
            exposed to content that You may find offensive, indecent, incorrect
            or objectionable, and You agree that under no circumstances will the
            Company be liable in any way for any content, including any errors
            or omissions in any content, or any loss or damage of any kind
            incurred as a result of your use of any content.
          </p>
          <br />

          <h4>Content Backups</h4>
          <p>
            Although regular backups of Content are performed, the Company does
            not guarantee there will be no loss or corruption of data.
          </p>
          <br />
          <p>
            Corrupt or invalid backup points may be caused by, without
            limitation, Content that is corrupted prior to being backed up or
            that changes during the time a backup is performed.
          </p>
          <br />
          <p>
            The Company will provide support and attempt to troubleshoot any
            known or discovered issues that may affect the backups of Content.
            But you acknowledge that the Company has no liability related to the
            integrity of Content or the failure to successfully restore Content
            to a usable state.
          </p>
          <br />
          <p>
            You agree to maintain a complete and accurate copy of any Content in
            a location independent of the Service.
          </p>
          <br />

          <h3>Copyright Policy</h3>
          <p>Intellectual Property Infringement</p>
          <br />
          <p>
            We respect the intellectual property rights of others. It is our
            policy to respond to any claim that Content posted on the Service
            infringes a copyright or other intellectual property infringement of
            any person.
          </p>
          <br />
          <p>
            If You are a copyright owner, or authorized on behalf of one, and
            You believe that the copyrighted work has been copied in a way that
            constitutes copyright infringement that is taking place through the
            Service, You must submit Your notice in writing to the attention of
            our copyright agent via email tech@dkeralutive.com and include in
            Your notice a detailed description of the alleged infringement.
          </p>
          <br />

          <p>
            You may be held accountable for damages (including costs and
            attorneys' fees) for misrepresenting that any Content is infringing
            your copyright.
          </p>
          <br />
          <p>Notice and Procedure for Copyright Infringement Claims</p>
          <br />
          <p>
            You may submit a notification by providing our Copyright Agent with
            the following information in writing;
          </p>
          <br />
          <p>
            An electronic or physical signature of the person authorized to act
            on behalf of the owner of the copyright's interest.
          </p>
          <br />
          <p>
            A description of the copyrighted work that you claim has been
            infringed, including the URL (i.e., web page address) of the
            location where the copyrighted work exists or a copy of the
            copyrighted work.
          </p>
          <br />
          <p>
            Identification of the URL or other specific location on the Service
            where the material that you claim is infringing is located.
          </p>
          <br />
          <p>Your address, telephone number, and email address.</p>
          <br />
          <p>
            A statement by you that you have a good faith belief that the
            disputed use is not authorized by the copyright owner, its agent, or
            the law.
          </p>
          <br />
          <p>
            A statement by you, made under penalty of perjury, that the above
            information in your notice is accurate and that you are the
            copyright owner or authorized to act on the copyright owner's
            behalf.
          </p>
          <br />

          <p>
            You can contact our copyright agent via email at
            <span className="h6"> tech@dkeralutive.com.</span> Upon receipt of a
            notification, the Company will take whatever action, in its sole
            discretion, it deems appropriate, including removal of the
            challenged content from the Service.
          </p>
          <br />

          <h3>Placing Orders for Products</h3>
          <p>
            By placing an Order for Products through the Service, You warrant
            that you are legally capable of entering into binding contracts.
          </p>
          <br />

          <h3>Your Information</h3>
          <p>
            If You wish to place an Order for Products available on the Service,
            You may be asked to supply certain information relevant to Your
            Order including, without limitation, Your name, Your email, Your
            phone number, Your credit card number, the expiration date of Your
            credit card, Your billing address, and Your shipping information.
          </p>
          <br />
          <p>You represent and warrant that:</p>
          <br />
          <ul>
            <li>
              (i) You have the legal right to use any credit or debit card(s) or
              other payment method(s) in connection with any Order; and that
            </li>
            <li>
              (ii) the information you supply to us is true, correct and
              complete.
            </li>
          </ul>

          <p>
            By submitting such information, you grant us the right to provide
            the information to payment processing third parties for purposes of
            facilitating the completion of Your Order.
          </p>
          <br />

          <h3>Order Cancellation</h3>
          <p>
            We reserve the right to refuse or cancel Your Order at any time for
            certain reasons including but not limited to:
          </p>
          <br />
          <ul>
            <li>Products availability</li>
            <li>Errors in the description or prices for Products</li>
            <li>Errors in Your Order</li>
          </ul>

          <p>
            We reserve the right to refuse or cancel Your Order if fraud or an
            unauthorized or illegal transaction is suspected.
          </p>
          <br />

          <h3>Your Order Cancellation Rights</h3>
          <p>
            Any Products you purchase can only be returned or refunded in
            accordance with these Terms and Conditions.
          </p>
          <br />

          <h3>Availability, Errors and Inaccuracies</h3>
          <p>
            We are constantly updating our offerings of Products on the Service.
            The Products available on Our Service may be mispriced, described
            inaccurately, or unavailable, and we may experience delays in
            updating information regarding our Products on the Service and in
            our advertising on other websites.
          </p>
          <br />
          <p>
            We cannot and do not guarantee the accuracy or completeness of any
            information, including prices, product images, specifications,
            availability, and services. We reserve the right to change or update
            information and to correct errors, inaccuracies, or omissions at any
            time without prior notice.
          </p>
          <br />

          <h3>Prices Policy</h3>
          <p>
            The Company reserves the right to revise its prices at any time
            prior to accepting an Order.
          </p>
          <br />
          <p>
            The prices quoted may be revised by the Company subsequent to
            accepting an Order in the event of any occurrence affecting delivery
            caused by government action, variation in customs duties, increased
            shipping charges, higher foreign exchange costs and any other matter
            beyond the control of the Company. In that event, you will have the
            right to cancel Your Order.
          </p>
          <br />

          <h3>Payments</h3>
          <p>
            Payment can be made through various payment methods we have
            available, such as Visa, MasterCard, Affinity Card, American Express
            cards or online payment methods (PayPal, for example).
          </p>
          <br />
          <p>
            Payment cards (credit cards or debit cards) are subject to
            validation checks and authorization by your card issuer. If we do
            not receive the required authorization, We will not be liable for
            any delay or non-delivery of Your Order.
          </p>
          <br />

          <h3>Promotions</h3>
          <p>
            Any Promotions made available through the Service may be governed by
            rules that are separate from these Terms.
          </p>
          <br />
          <p>
            If You participate in any Promotions, please review the applicable
            rules as well as our Privacy policy.
          </p>
          <br />
          <p>
            If the rules for a Promotion conflict with these Terms, the
            Promotion rules will apply.
          </p>
          <br />

          <h3>Intellectual Property</h3>
          <p>
            The Service and its original content (excluding Content provided by
            You or other users), features and functionality are and will remain
            the exclusive property of the Company and its licensors.
          </p>
          <br />
          <p>
            The Service is protected by copyright, trademark, and other laws of
            both the Country and foreign countries.
          </p>
          <br />
          <p>
            Our trademarks and trade dress may not be used in connection with
            any product or service without the prior written consent of the
            Company.
          </p>
          <br />

          <h3>Your Feedback to Us</h3>
          <p>
            You assign all rights, title and interest in any Feedback You
            provide the Company. If for any reason such assignment is
            ineffective, You agree to grant the Company a non-exclusive,
            perpetual, irrevocable, royalty free, worldwide right and license to
            use, reproduce, disclose, sub-license, distribute, modify and
            exploit such Feedback without restriction.
          </p>
          <br />

          <h3>Links to Other Websites</h3>
          <p>
            Our Service may contain links to third-party web sites or services
            that are not owned or controlled by the Company
          </p>
          <br />
          <p>
            The Company has no control over, and assumes no responsibility for,
            the content, privacy policies, or practices of any third party web
            sites or services. You further acknowledge and agree that the
            Company shall not be responsible or liable, directly or indirectly,
            for any damage or loss caused or alleged to be caused by or in
            connection with the use of or reliance on any such content, goods or
            services available on or through any such web sites or services.
          </p>
          <br />
          <p>
            We strongly advise You to read the terms and conditions and privacy
            policies of any third-party web sites or services that You visit.
          </p>
          <br />

          <h3>Termination</h3>
          <p>
            We may terminate or suspend Your Account immediately, without prior
            notice or liability, for any reason whatsoever, including without
            limitation if You breach these Terms and Conditions.
          </p>
          <br />
          <p>
            Upon termination, Your right to use the Service will cease
            immediately. If You wish to terminate Your Account, You may simply
            discontinue using the Service.
          </p>
          <br />

          <h3>Limitation of Liability</h3>
          <p>
            Notwithstanding any damages that You might incur, the entire
            liability of the Company and any of its suppliers under any
            provision of this Terms and Your exclusive remedy for all of the
            foregoing shall be limited to the amount actually paid by You
            through the Service
          </p>
          <br />
          <p>
            To the maximum extent permitted by applicable law, in no event shall
            the Company or its suppliers be liable for any special, incidental,
            indirect, or consequential damages whatsoever (including, but not
            limited to, damages for loss of profits, loss of data or other
            information, for business interruption, for personal injury, loss of
            privacy arising out of or in any way related to the use of or
            inability to use the Service, third-party software and/or
            third-party hardware used with the Service, or otherwise in
            connection with any provision of this Terms), even if the Company or
            any supplier has been advised of the possibility of such damages and
            even if the remedy fails of its essential purpose.
          </p>
          <br />
          <p>
            Some states do not allow the exclusion of implied warranties or
            limitation of liability for incidental or consequential damages,
            which means that some of the above limitations may not apply. In
            these states, each party's liability will be limited to the greatest
            extent permitted by law.
          </p>
          <br />

          <h3>"AS IS" and "AS AVAILABLE" Disclaimer</h3>
          <p>
            The Service is provided to You "AS IS" and "AS AVAILABLE" and with
            all faults and defects without warranty of any kind. To the maximum
            extent permitted under applicable law, the Company, on its own
            behalf and on behalf of its Affiliates and its and their respective
            licensors and service providers, expressly disclaims all warranties,
            whether express, implied, statutory or otherwise, with respect to
            the Service, including all implied warranties of merchantability,
            fitness for a particular purpose, title and non-infringement, and
            warranties that may arise out of course of dealing, course of
            performance, usage or trade practice. Without limitation to the
            foregoing, the Company provides no warranty or undertaking, and
            makes no representation of any kind that the Service will meet Your
            requirements, achieve any intended results, be compatible or work
            with any other software, applications, systems or services, operate
            without interruption, meet any performance or reliability standards
            or be error free or that any errors or defects can or will be
            corrected.
          </p>
          <br />
          <p>
            Without limiting the foregoing, neither the Company nor any of the
            company's provider makes any representation or warranty of any kind,
            express or implied:
          </p>
          <br />

          <ul>
            <li>
              (i) as to the operation or availability of the Service, or the
              information, content, and materials or products included thereon;
            </li>
            <li>(ii) that the Service will be uninterrupted or error-free;</li>
            <li>
              (iii) as to the accuracy, reliability, or currency of any
              information or content provided through the Service; or
            </li>
            <li>
              (iv) that the Service, its servers, the content, or e-mails sent
              from or on behalf of the Company are free of viruses, scripts,
              trojan horses, worms, malware, timebombs or other harmful
              components.
            </li>
          </ul>

          <p>
            Some jurisdictions do not allow the exclusion of certain types of
            warranties or limitations on applicable statutory rights of a
            consumer, so some or all of the above exclusions and limitations may
            not apply to You. But in such a case the exclusions and limitations
            set forth in this section shall be applied to the greatest extent
            enforceable under applicable law.
          </p>
          <br />

          <h3>Governing Law</h3>
          <p>
            The laws of the Country, excluding its conflicts of law rules, shall
            govern this Terms and Your use of the Service. Your use of the
            Application may also be subject to other local, state, national, or
            international laws.
          </p>
          <br />

          <h3>Disputes Resolution</h3>
          <p>
            If You have any concern or dispute about the Service, You agree to
            first try to resolve the dispute informally by contacting the
            Company.
          </p>
          <br />

          <h3>Severability</h3>
          <p>
            If any provision of these Terms is held to be unenforceable or
            invalid, such provision will be changed and interpreted to
            accomplish the objectives of such provision to the greatest extent
            possible under applicable law and the remaining provisions will
            continue in full force and effect.
          </p>
          <br />

          <h3>Waiver</h3>
          <p>
            Except as provided herein, the failure to exercise a right or to
            require performance of an obligation under this Terms shall not
            effect a party's ability to exercise such right or require such
            performance at any time thereafter nor shall be the waiver of a
            breach constitute a waiver of any subsequent breach.
          </p>
          <br />

          <h3>Changes to These Terms and Conditions</h3>
          <p>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time.
          </p>
          <br />
          <p>
            By continuing to access or use our Service after those revisions
            become effective, you agree to be bound by the revised terms. If you
            do not agree to the new terms, in whole or in part, please stop
            using the website and the Service.
          </p>
          <br />

          <h3>Contact Us</h3>
          <p>
            If you have any questions about these Terms and Conditions, You can
            contact us:
          </p>
          <br />
          <ul>
            <li>
              By visiting this page on our website:{" "}
              <a
                href="https://dkerulative.com.ng"
                className="text-blue-400 transition-all duration-500 hover:text-blue-700"
              >
                https://dkerulative.com.ng
              </a>
            </li>
            <li>
              By sending us an email:{" "}
              <a
                href="mailto:tech@dkeralutive.com"
                className="text-blue-400 transition-all duration-500 hover:text-blue-700"
              >
                tech@dkeralutive.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
