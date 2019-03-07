import React from 'react'
import SEO from '../components/seo'

import Layout from '../components/layout'
import HostingHero from '../components/heroes/HostingHero'
import { ContentWrapper } from '../components/styles/shared'

const hosting = () => {
  return (
    <Layout>
      <SEO
        title="Website Hosting"
        keywords={[`hosting`, `website hosting`, `progressive web app`]}
      />
      <HostingHero />
      <ContentWrapper>
        <h1>Website Hosting Without Worry</h1>
        <p>
          It doesn't matter what type of website you dream of having. Whether you are looking to
          build an e-commerce empire, hope to be a travel blogger jetting around the world or just
          looking to build a forum to share information on your favorite hobby, your site has got to
          have a home. That is a server for it live on and operate from. We provide fully managed
          website hosting that leaves you without anything to worry about for as little as $30 a
          month. If there is a problem, we fix it.
        </p>
        <h2>What do we mean by fully managed?</h2>
        <p>
          Fully managed means exactly what it sounds like. We handle all installation and
          maintenance tasks. We make sure your server is fully optimized so your site's visitors
          have the best possible experience when they log onto your site. More importantly, if there
          is a problem, we handle it promptly and efficiently.
        </p>
        <h2>The Fully Managed Advantage</h2>
        <p>
          The advantage of using fully managed hosting to host your website is that you get the
          security of having your own server but without the expense or hassle. We take care of
          everything.
        </p>
        <p>
          You don't have access to the server but neither does anyone else except us. This greatly
          enhances the server's security and lowers the risk of your data being accidentally or
          intentionally accessed or corrupted.
        </p>
        <h2>Additional Services to Consider</h2>
        <h3>Backup and Restoration Service</h3>
        <p>
          For a small additional fee of $5 a month we will keep complete backups of all your data so
          that if your site should be hacked or you mistakenly do something to break your site, we
          can fully restore it in a matter of minutes. Without this service, there is little that
          you can do other than start from scratch and rebuild from the ground up.
        </p>
        <h3>WordPress Site Restoration</h3>
        <p>
          WordPress sites present a special risk that must be taken into account. When WordPress
          sites get hacked simply restoring the files is not enough. If they get hacked their
          database is also compromised and a quick audit of the hacker's methods of access needs to
          be done or the site will almost certainly be hacked again almost immediately after it is
          restored.
        </p>
        <p>
          For $15 a month we will not only maintain backups of your data and provide restoration
          services for your WordPress site, in the event that your site is hacked, we will perform
          an analysis of the methods used and try to find the security risk that left your site
          vulnerable, to begin with. Only then will we restore your site and peace of mind. *
        </p>
        <p>
          * Please note, WordPress vulnerabilities can be caused by third-party plugins, a weakness
          in your themes original coding or a host of other issues. A full site security audit is a
          highly specialized procedure that requires hundreds of expert man-hours and cost thousands
          of dollars. We can only provide a basic audit for the most common security problems.
        </p>
      </ContentWrapper>
    </Layout>
  )
}

export default hosting
