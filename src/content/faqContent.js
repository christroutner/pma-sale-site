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
]

export const dos = [
  'Use signed membership agreements with clear expectations and consent.',
  'Restrict participation to members and keep member communications private.',
  'Maintain internal governance documents, meeting records, and policy updates.',
  'Frame internal payments as dues/fees defined by membership agreements.',
  'Consult legal counsel in your state before launching or changing operations.',
]

export const donts = [
  'Do not market PMA-only goods/services to the general public.',
  'Do not operate in ways that resemble open retail commerce.',
  'Do not assume the PMA label alone protects against all regulation.',
  'Do not ignore public health, safety, or licensing obligations.',
  'Do not deploy templates without attorney review and local adaptation.',
]
