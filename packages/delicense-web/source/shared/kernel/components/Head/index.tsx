// #region imports
    // #region libraries
    import React from 'react';

    import {
        Helmet,
    } from 'react-helmet-async';
    // #endregion libraries
// #endregion imports



// #region module
export interface HeadProperties {
    title?: string;
    description?: string;
    ogTitle?: string;
    ogImage?: string;
    ogURL?: string;
    ogDescription?: string;
    canonicalURL?: string;
}

const Head: React.FC<HeadProperties> = (
    properties,
) => {
    // #region properties
    const {
        title,
        description,
        ogTitle,
        ogImage,
        ogURL,
        ogDescription,
        canonicalURL,
    } = properties;

    const titleValue = title || `delicense`;
    const descriptionValue = description || 'Dispersal Framework for Delicensed Data';
    const ogTitleValue = ogTitle || title || `delicense`;
    const ogDescriptionValue = ogDescription || description || 'Dispersal Framework for Delicensed Data';
    const ogImageValue = ogImage || '/icon-192x192.png';
    const ogURLValue = ogURL || 'https://delicense.org';

    const apiDomain = 'https://api.delicense.org';
    // #endregion properties


    // #region render
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="robots" content="index,follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

            <title>{titleValue}</title>
            <meta name="title" content={titleValue} />
            <meta name="description" content={descriptionValue} />

            <link rel="preconnect" href={apiDomain} />
            <link rel="dns-prefetch" href={apiDomain} />

            <link rel="icon" href="/favicon.ico" sizes="64x64" />
            <link rel="shortcut icon" type="image/png" href="/icon-192x192.png" />
            <link rel="shortcut icon" sizes="192x192" href="/icon-192x192.png" />
            <meta name="theme-color" content="#272A30" />

            <link rel="manifest" href="/manifest.json" />

            {canonicalURL && (
                <link rel="canonical" href={canonicalURL} />
            )}

            {/* OPEN GRAPH */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={ogTitleValue} />
            <meta property="og:image" content={ogImageValue} />
            <meta property="og:site_name" content="delicense" />
            <meta property="og:url" content={ogURLValue} />
            <meta property="og:description" content={ogDescriptionValue} />

            {/* TWITTER */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={ogURLValue} />
            <meta property="twitter:title" content={ogTitleValue} />
            <meta property="twitter:description" content={ogDescriptionValue} />
            <meta property="twitter:image" content={ogImageValue} />

            {/* SAFARI */}
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content={titleValue} />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        </Helmet>
    );
    // #endregion render
}
// #endregion module



// #region exports
export default Head;
// #endregion exports
