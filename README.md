# KoD

A public record of the people, programs, research, and conversations developing KoD. The website presents a concise directory; individual pages and structured data files preserve the material behind it.

**[Explore KoD](https://brandiejanow.github.io/Knowledge-of-Design/)**

## Main collections

- **Editions:** Riyadh programs and their history
- **Sessions:** Panels, workshops, and roundtables from annual editions, with KoD Connect online sessions linked from the Sessions page
- **People:** Contributors with STEAM categories based on educational backgrounds
- **Global:** International activities and collaborations
- **Advisory:** Members, discussions, and contributions
- **Research:** Design education, design ecosystems, published papers, and recorded speaker focus groups
- **Lessons Learned:** Program reviews, participant feedback, recommendations, and documented follow-up

The homepage introduces KoD through selected examples of publications, KoD Connect, and the Riyadh editions. The navigation leads to Editions, Sessions, People, Global, Advisory, and Research. Online KoD Connect sessions are linked from Sessions.

## Research publications

- [Design Ecosystems](https://brandiejanow.github.io/Knowledge-of-Design/research.html#design-ecosystems) presents a six area model on the Research page, examining culture, materials, labor, institutions, decisions, and ecological effects.
- [Design Education and Its Future](https://brandiejanow.github.io/Knowledge-of-Design/research.html#design-education) examines AI in design education alongside curriculum, ethics, research, STEAM and industry preparation. The concise study and its curriculum chart are published within the Research page.
- [Making a Design Culture](https://brandiejanow.github.io/Knowledge-of-Design/making-a-design-culture.html) is a full, readable research publication.
- [KoD Connect: The Project Before the Project](https://brandiejanow.github.io/Knowledge-of-Design/connect.html#session-01) is the first online session record.
- [Lessons Learned](https://brandiejanow.github.io/Knowledge-of-Design/lessons-learned.html) records feedback from the 2025 event review and the 2026 speaker discussion, distinguishing suggestions from verified decisions.

## Structured data

- `data/people.csv`, `data/talks.csv`, `data/editions.csv`, `data/advisory.csv`, `data/global.csv`, and `data/research.csv` preserve research and archive records.
- `data/connect.csv` provides the record of online sessions. The research-page field stays empty when there is no published destination.
- `data/making-a-design-culture.json` preserves structured publication data.

## Publication integrity

The public record distinguishes a session record from its interpretation. Preliminary inquiries stay marked as such until original recordings have been checked. Personal contact information, private meeting details, and unpublished participant material are not exposed by the current archive.

Use no em dashes in website copy, metadata, documentation, or publications. Use commas, full stops, colons, or parentheses instead.

[Sources and provenance](https://brandiejanow.github.io/Knowledge-of-Design/provenance.html)

## Publication review standard

Public copy describes research, methods, participants, evidence, dates and findings in clear, direct sentences. Use American English, affirmative wording and varied sentence structures. Keep the focus on information that readers can verify or investigate. Original quotations, formal institution names, historical event titles, citations and URLs retain their source wording. Review public pages, search descriptions, data labels and publication summaries before each release.


## Research ownership and credits

KoD preserves the complete history of its own programs and contributors. Work independently authored before KoD retains its own date and project record; KoD may develop a separate, properly credited study from that earlier work. The study page identifies the lead researcher and authors near the title and distinguishes contributors from research authors. Prior advisory work does not imply that a university adopted later proposals because of it.

Before new research is added here, follow the project placement and publication rules in [AGENTS.md](AGENTS.md). Keep independent Saudi Creative Economy research in its own research publication and index it through the personal research catalogue. Keep the Rukun Saudi Creative Index limited to Rukun's own research.


## Maintenance checkpoint: October 31, 2026

- Reviewed all 13 HTML routes and nine CSV files against revision `098a1c6f0dc377135e000624be881cde68d6c503`.
- Added year-specific navigation, a route to Lessons Learned from Research, article contents, and consistent provenance links. Made existing curriculum counts visible and improved small-text contrast without changing chart values or the decorative palette.
- Moved the paper's existing Research Approach directly after its abstract. Its argument, quotations, authorship and research status are unchanged.
- Corrected the SXSW London title and June 3, 2026 date using the [official session program](https://sxswlondon.com/session/from-vision-to-reality-designing-at-national-scale-c58fc057), including the corresponding five Global data rows.
- Presented four Advisory reflections as dated discussion summaries rather than direct quotations after comparison with their source transcript. The separate 2025 participant perspectives are unchanged.
- Cleared the Connect data link to a nonexistent research section. The session page and recorded research status are retained.
- Next checkpoint: verify unresolved quotation sources and name variants, and review undated signal and industry-interpretation entries individually before any reclassification. This update does not certify every underlying recording or change completed-study statuses.


### October 31, 2026: homepage and Research editorial revision

- Scope: `index.html` and `research.html`, following the navigation and readability release at `d3df2e8da4350dab99b223069d5ae165169b962e`. This is a targeted presentation update, not another full archive audit.
- Replaced the homepage's general introduction with the subjects KoD examines and added three routes into existing education, ecosystem, and program-review material. The featured publication, Connect session, and 2025 edition remain visible.
- Put Making a Design Culture first on Research, with its existing method, five-part proposition, authorship, and a link to the full paper. The paper itself is unchanged.
- Added a concise account of already-public November 2025 and September 2026 program reviews. Observations and proposals remain distinct from implementation and measured outcomes.
- Tightened the education introduction while retaining the exact advisory-role credit and all 12 curriculum counts. Preserved the six-area model and all six focus-group records and credits.
- Separated the external researcher-care reference and proposed inquiry from the ecosystem model. Both source links and the existing anchor are retained.
- Static verification covers existing anchors, local page and fragment links, unchanged chart/model data, retained credits, and the three-file change scope. Live deployment and rendered-page verification remain release checks, not completed outcomes of this local pass.
- Next checkpoint: inspect the two revised pages at desktop and narrow widths and verify the deployed content. The earlier unresolved quotation/name checks and individual review of undated signals remain open. Coded-status labels have not been mapped to dated focus groups without exact source identifiers.
