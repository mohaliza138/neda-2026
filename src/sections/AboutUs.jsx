import { useMemo, useState } from 'react';
import { STAFF } from '../data/content';
import './AboutUs.css';

const GitHubIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 19 19" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844"/>
  </svg>
);

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function platformLabel(url) {
  if (!url) return null;
  if (url.includes('github.com'))   return { label: 'GitHub',   icon: '⌥' };
  if (url.includes('linkedin.com')) return { label: 'LinkedIn', icon: 'in' };
  return { label: 'Profile', icon: '↗' };
}

function githubAvatarUrl(member) {
  const url = member.github || (member.url?.includes('github.com') ? member.url : null);
  if (!url) return null;
  const username = url.replace(/\/$/, '').split('/').pop();
  return username ? `https://github.com/${username}.png?size=80` : null;
}

function MemberCard({ member }) {
  const platform = platformLabel(member.url);
  const avatarUrl = githubAvatarUrl(member);
  const [imgFailed, setImgFailed] = useState(false);

  const initials = member.name
    .split(' ')
    .map(w => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="aus__card">
      <div className="aus__avatar">
        {avatarUrl && !imgFailed
          ? <img src={avatarUrl} alt={member.name} className="aus__avatar-img" onError={() => setImgFailed(true)} />
          : initials}
      </div>
      <div className="aus__info">
        <p className="aus__name">
          {member.name}
          {member.github && (
            <a href={member.github} className="aus__github-icon" target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
          )}
        </p>
        {platform && (
          <a
            href={member.url}
            className="aus__link"
            target="_blank"
            rel="noreferrer"
          >
            <span className="aus__platform-icon">{platform.icon}</span>
            {platform.label}
          </a>
        )}
      </div>
    </div>
  );
}

export default function AboutUs() {
  const shuffledStaff = useMemo(
    () => STAFF.map(group => ({ ...group, members: shuffle(group.members) })),
    [],
  );

  return (
    <section className="page-section" id="team">
      <div className="container">
        <p className="section-eyebrow">The team</p>
        <h2 className="aus__heading">People behind NEDA</h2>
        <p className="aus__sub">
          NEDA is organized and run by former DSD students who believe EDA deserves
          a spotlight in our department — and want to give others an easy way in.
        </p>
        <p className="aus__random-note">Order is randomized on each visit.</p>

        <div className="aus__groups">
          {shuffledStaff.map(group => (
            <div key={group.role} className="aus__group">
              <div className="aus__group-label">{group.role}</div>
              <div className="aus__grid">
                {group.members.map((m, i) => (
                  <MemberCard key={i} member={m} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
