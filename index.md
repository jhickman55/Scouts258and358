---
layout: default
title: Home
---

<section class="hero is-primary is-medium">
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title is-1 has-text-white">Scouts BSA Troops 258 & 358</h1>
      <p class="subtitle is-4 has-text-white">Youth-led scouting in Cedar Park & Leander, Texas</p>
      <div class="buttons is-centered mt-4">
        <a href="{{ '/contact/' | relative_url }}" class="button is-white is-outlined is-medium">Join Our Troop</a>
        <a href="{{ '/scout-portal/' | relative_url }}" class="button is-light is-medium">Scout Portal</a>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <h2 class="title is-3">Who We Are</h2>
    <div class="content">
      <p>Troops 258 and 358 are young, active, youth-led scout troops that meet weekly at <a href="https://www.rockbridgelife.com/" target="_blank" rel="noopener noreferrer">Rockbridge Church</a> in Cedar Park. We are part of the North Shore District of the <a href="https://www.bsacac.org/" target="_blank" rel="noopener noreferrer">Capitol Area Council</a>. Both troops share resources and coordinate activities while maintaining separate leadership structures.</p>
    </div>

    <div class="columns mt-4">
      <div class="column is-6">
        <div class="card">
          <div class="card-content">
            <h3 class="title is-4">Troop 258</h3>
            <ul>
              <li>Boy's Troop</li>
              <li>7 Patrols</li>
              <li>53 Scouts</li>
              <li><strong>Scoutmaster:</strong> Mr. Shawn Trollope</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="column is-6">
        <div class="card">
          <div class="card-content">
            <h3 class="title is-4">Troop 358</h3>
            <ul>
              <li>Girl's Troop</li>
              <li>3 Patrols</li>
              <li>25 Scouts</li>
              <li><strong>Scoutmaster:</strong> Mrs. Carla Osuna</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="content mt-4">
      <p><strong>Committee Chair:</strong> Brian Kennedy</p>
    </div>
    <!-- TODO: Add troop logo here once available. Use: <img src="{{ '/assets/images/logo.png' | relative_url }}" alt="Troops 258 & 358 Logo"> -->
  </div>
</section>

<section class="section has-background-light">
  <div class="container">
    <h2 class="title is-3 has-text-centered">Quick Links</h2>
    <div class="columns is-multiline">
      <div class="column is-4">
        <div class="card">
          <div class="card-content has-text-centered">
            <span class="icon is-large has-text-primary"><i class="fas fa-user-plus fa-3x"></i></span>
            <h3 class="title is-5 mt-3">New Scouts</h3>
            <p>Interested in joining? Learn how to get started.</p>
            <a href="{{ '/new-scout-process/' | relative_url }}" class="button is-primary is-outlined mt-3">Get Started</a>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="card">
          <div class="card-content has-text-centered">
            <span class="icon is-large has-text-primary"><i class="fas fa-compass fa-3x"></i></span>
            <h3 class="title is-5 mt-3">Scout Portal</h3>
            <p>Resources for current scouts and leaders.</p>
            <a href="{{ '/scout-portal/' | relative_url }}" class="button is-primary is-outlined mt-3">Enter Portal</a>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="card">
          <div class="card-content has-text-centered">
            <span class="icon is-large has-text-primary"><i class="fas fa-envelope fa-3x"></i></span>
            <h3 class="title is-5 mt-3">Contact Us</h3>
            <p>Questions? Reach out to our troop leadership.</p>
            <a href="{{ '/contact/' | relative_url }}" class="button is-primary is-outlined mt-3">Get in Touch</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <h2 class="title is-3">Meeting Info</h2>
    <div class="content">
      <p><i class="fas fa-map-marker-alt has-text-primary"></i> <strong>{{ site.meeting_location }}</strong><br>
      {{ site.meeting_address }}</p>
      <p><i class="fas fa-clock has-text-primary"></i> <strong>{{ site.meeting_time }}</strong></p>
      <p>Scouts should be at least 10 years old and in fifth grade to join.</p>
    </div>
  </div>
</section>

<section class="section has-background-light">
  <div class="container">
    <div class="columns">
      <div class="column is-6">
        <h2 class="title is-4">Scout Oath</h2>
        <div class="content">
          <p><em>On my honor I will do my best to do my duty to God and my country and to obey the Scout Law; to help other people at all times; to keep myself physically strong, mentally awake, and morally straight.</em></p>
        </div>
      </div>
      <div class="column is-6">
        <h2 class="title is-4">Scout Law</h2>
        <div class="content">
          <p><em>A Scout is trustworthy, loyal, helpful, friendly, courteous, kind, obedient, cheerful, thrifty, brave, clean, and reverent.</em></p>
        </div>
      </div>
    </div>
  </div>
</section>
