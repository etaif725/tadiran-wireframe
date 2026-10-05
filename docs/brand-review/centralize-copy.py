from pathlib import Path
p=Path('__temp__/production/src/app/page.tsx');s=p.read_text(encoding='utf-8').replace('brandSolutions, brandIndustries, brandFacts','brandSolutions, brandIndustries, brandFacts, homeEditorial as copy')
replacements={
'01 / What we make possible':'{copy.intro.kicker}','Technology connects.':'{copy.intro.title}','People make it matter.':'{copy.intro.accent}',
'From the first customer conversation to the call that keeps an operation moving. Tadiran brings communications, customer experience, and integration together.':'{copy.intro.body}',
'02 / Experience behind every connection':'{copy.proof.kicker}','A global company.':'{copy.proof.title}','A human connection.':'{copy.proof.accent}',
'Regional teams. Local partners. Dedicated R&amp;D. Enterprise technology supported by people who understand your market.':'{copy.proof.body}',
'Get to know Tadiran':'{copy.proof.action}','Regional offices: USA, Israel, India, and China.':'{copy.proof.offices}','R&amp;D: Israel and China.':'{copy.proof.research}',
'03 / Built around your world':'{copy.industries.kicker}','Different industries.':'{copy.industries.title}','Shared ambition.':'{copy.industries.accent}',
'Keep people connected. Make service simpler. Help the operation move forward.':'{copy.industries.body}','Explore all industries':'{copy.industries.action}',
'Let’s connect':'{copy.closing.kicker}','Your next chapter.':'{copy.closing.title}','Simply done right.':'{copy.closing.accent}',
'Tell us what you want to connect.':'{copy.closing.body}','We’ll help you find the right way forward.':'{copy.closing.support}','Start a conversation':'{copy.closing.action}'}
for old,new in replacements.items():s=s.replace(old,new)
p.write_text(s,encoding='utf-8')
p=Path('__temp__/production/docs/brand-2027-production.md');s=p.read_text(encoding='utf-8').replace('Homepage section structure and supporting copy','Homepage section structure').replace('Active travel is 400 viewport heights in CSS units, i.e. four viewports (400svh), plus one viewport','Active travel is four viewports (400svh), plus one viewport');p.write_text(s,encoding='utf-8')
