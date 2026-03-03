export const faqItems = [
  {
    question: 'What is a Private Membership Association (PMA)?',
    answer:
      'A PMA is a private, contract-based association where members voluntarily agree to shared rules and responsibilities. PMAs are typically grounded in freedom of association principles and private contract law.',
  },
  {
    question: 'Are PMAs automatically exempt from U.S. law?',
    answer:
      'No. There is no single Supreme Court ruling that makes PMAs immune from regulation. Courts evaluate real-world behavior, especially whether a group acts like a public-facing business or creates public harm.',
  },
  {
    question: 'What legal references are often cited in PMA discussions?',
    answer:
      'These are the major U.S. Supreme Court references commonly cited in PMA discussions, presented with the same core points as the source document.',
    legalReferences: {
      intro:
        'The modern term "Private Membership Association (PMA)" is not used directly in these rulings, but these decisions define constitutional boundaries for private association rights under the First Amendment. There is no single "PMA case"; the framework comes from freedom of association and its interaction with state and federal regulation.',
      cases: [
        {
          title: '1) NAACP v. Alabama ex rel. Patterson (1958)',
          citation: '357 U.S. 449 (1958)',
          holding:
            'Alabama could not compel the NAACP to disclose membership lists because forced disclosure would infringe associational rights and expose members to reprisals.',
          importance:
            'Frequently cited for strong protection of associational privacy and confidentiality of membership.',
        },
        {
          title: '2) Bates v. City of Little Rock (1960)',
          citation: '361 U.S. 516 (1960)',
          holding:
            'Local governments could not demand membership lists where disclosure would unnecessarily burden freedom of association.',
          importance:
            'Reinforces limits on compelled disclosure that can chill associational rights.',
        },
        {
          title: '3) Gibson v. Florida Legislative Investigation Committee (1963)',
          citation: '372 U.S. 539 (1963)',
          holding:
            'A state committee could not force NAACP membership disclosure without sufficient justification.',
          importance:
            'Confirms the government needs a substantial and legitimate interest before intruding on private association membership privacy.',
        },
        {
          title: '4) Roberts v. United States Jaycees (1984)',
          citation: '468 U.S. 609 (1984)',
          holding:
            'A large public-facing civic organization could be subject to anti-discrimination law.',
          importance:
            'Shows that not all private associations are treated the same; public-facing and commercial characteristics can increase regulation.',
        },
        {
          title: '5) Board of Directors of Rotary International v. Rotary Club of Duarte (1987)',
          citation: '481 U.S. 537 (1987)',
          holding:
            'California anti-discrimination law could apply to Rotary clubs due to their public-facing nature.',
          importance:
            'Reinforces that outward-facing and commercially engaged organizations are more likely to be regulated than closely held, selective groups.',
        },
        {
          title: '6) Boy Scouts of America v. Dale (2000)',
          citation: '530 U.S. 640 (2000)',
          holding:
            'An expressive organization may have First Amendment protection to exclude members when forced inclusion would alter its core message.',
          importance:
            'Highlights the legal importance of sincere, central expressive purpose in association-rights analysis.',
        },
      ],
      takeaways: [
        'Freedom of association can protect private groups, including membership privacy where disclosure would suppress collective expression.',
        'Courts distinguish intimate/selective associations from public-facing organizations; this distinction affects regulatory exposure.',
        'Expressive purpose can be legally significant when assessing membership control.',
        'Government restrictions on associations typically require a weighty justification and narrow tailoring.',
      ],
      caveat:
        'These cases do not create a blanket legal shield for PMAs. PMAs generally rely on private contract principles plus associative rights. If operations substantially affect the public (for example, public advertising or public-facing commercial transactions), additional regulation may apply. Courts evaluate actual conduct, not labels alone.',
    },
  },
  {
    question: 'How does PMA legal-basis guidance describe boundaries and risks?',
    answer:
      'This section summarizes additional PMA legal-basis guidance, including benefits, risks, operational boundaries, privacy rules, and enforcement considerations.',
    pmaLegalBasisSummary: {
      intro:
        'Additional context from PMA legal-basis guidance: PMAs are generally described as private, membership-driven associations based on contract and constitutional association principles. This can provide regulatory flexibility in limited situations, but does not create immunity from law.',
      keyFeatures: [
        'Private contracts define purpose, member rights, and responsibilities.',
        'Non-public status is central: PMAs operate as private associations, not open public businesses.',
        'Membership is voluntary and restricted to people who agree to terms.',
        'Legal arguments often rely on First Amendment association rights and contract law.',
      ],
      potentialBenefits: [
        'Regulatory flexibility when activities remain private and non-commercial.',
        'Greater member confidentiality and internal governance control.',
        'Custom rulemaking tailored to a community mission.',
      ],
      challengesAndRisks: [
        'Legal scope is often misunderstood; PMAs are not exempt from all regulation.',
        'Public marketing, public-facing sales, and unsafe practices can trigger enforcement.',
        'If activities are illegal or harmful, agencies can intervene despite PMA framing.',
      ],
      commonUseCases: [
        'Healthcare and wellness associations.',
        'Education and homeschooling cooperatives.',
        'Trade and skills networks inside private communities.',
        'Advocacy and faith-based member organizations.',
      ],
      prohibitionContext: [
        'During Prohibition, some speakeasies used private-club structures and membership systems to limit public exposure.',
        'Owners often argued alcohol was shared privately among members rather than sold publicly.',
        'There is no clear landmark precedent specifically authorizing PMA alcohol distribution as a broad legal defense.',
      ],
      regulatedGoodsExamples: [
        'Raw milk distribution via member-only agreements and risk acknowledgment.',
        'Alcohol service in private clubs in restrictive local jurisdictions.',
        'Distribution of non-USDA-inspected meat among consenting members.',
        'Alternative health products/services provided inside membership structures.',
      ],
      strictPrivacyRules: [
        'Restriction to members only.',
        'Clear and explicit membership agreements.',
        'No public advertising for member-only goods/services.',
        'Internal communication through private channels.',
        'Non-commercial framing and operations.',
        'Private internal governance and documented procedures.',
        'Avoidance of public harm and safety risks.',
        'Documentation of private status (agreements, records, governance decisions).',
      ],
      pmaVsPublicSale: [
        {
          aspect: 'Membership requirement',
          pma: 'Restricted to members under agreed private terms.',
          publicSale: 'Open to the general public.',
        },
        {
          aspect: 'Advertising',
          pma: 'Member recruitment is private; public advertising creates risk.',
          publicSale: 'Public advertising is standard.',
        },
        {
          aspect: 'Regulatory posture',
          pma: 'May face fewer rules if truly private and narrowly operated.',
          publicSale: 'Commerce, licensing, and public health rules apply broadly.',
        },
        {
          aspect: 'Purpose and structure',
          pma: 'Mutual member benefit under private agreements.',
          publicSale: 'Commercial transactions in open markets.',
        },
      ],
      enforcementBoundaries: [
        'Authorities may intervene when activities affect non-members or the public.',
        'Authorities may intervene if a PMA appears to be a front for evading licensing or safety rules.',
        'Member disputes can pull operations into regulatory and legal scrutiny.',
        'Historical examples include actions tied to unlicensed healthcare, food safety violations, and controlled-substance distribution.',
      ],
      closingNote:
        'Practical takeaway: PMAs can be a private organizational framework, but outcomes depend on real operations, documentation quality, and jurisdiction-specific law. Legal counsel is essential before launch.',
    },
  },
]

export const dos = [
  'Use signed membership agreements with clear expectations and consent.',
  'Restrict participation to members and keep member communications private.',
  'Maintain internal governance documents, meeting records, and policy updates.',
  'Frame internal payments as dues/fees defined by membership agreements.'
]

export const donts = [
  'Do not market PMA-only goods/services to the general public.',
  'Do not operate in ways that resemble open retail commerce.',
  'Do not assume the PMA label alone protects against all regulation.',
  'Do not ignore public health, safety, or licensing obligations.'
]
