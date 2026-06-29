---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Home
---

<section class="hero">
    <div class="hero-image" role="img" aria-label="Cybersecurity-themed digital shield image"></div>

    <div class="hero-content">
        <p class="eyebrow">Cybersecurity • Network Administration • IT</p>

        <h1>James G. Davis</h1>

        <p class="hero-subtitle">
            Cybersecurity graduate focused on systems security, network administration,
            technical writing, and practical infrastructure projects.
        </p>

        <div class="hero-actions">
            <a class="button primary" href="{{ '/projects/' | relative_url }}">View Projects</a>
            <a class="button" href="{{ '/resume/' | relative_url }}">View Resume</a>
            <a class="button" href="{{ '/contact/' | relative_url }}">Contact</a>
        </div>
    </div>
</section>

<section class="section">
    <h2>Portfolio Focus</h2>

    <div class="card-grid">
        <article class="card">
            <h3>Cybersecurity Coursework</h3>
            <p>
                Academic projects and writing samples covering systems security,
                cybersecurity ethics, policy, law, and technical analysis.
            </p>
        </article>

        <article class="card">
            <h3>Network & Systems Administration</h3>
            <p>
                Work focused on Linux, Windows administration, automation, and secure
                infrastructure fundamentals.
            </p>
        </article>

        <article class="card">
            <h3>Homelab Development</h3>
            <p>
                A developing collection of hands-on projects involving Raspberry Pi,
                private networking, DNS filtering, backups, and documentation.
            </p>
        </article>
    </div>
</section>