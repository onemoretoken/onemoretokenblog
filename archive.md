---
layout: page
title: Archive
permalink: /archive/
---

# Post Archive

{% for post in site.posts %}
  {% assign currentYear = post.date | date: "%Y" %}
  {% assign currentMonth = post.date | date: "%B" %}
  {% if currentYear != year %}
### {{ currentYear }}
    {% assign year = currentYear %}
  {% endif %}

* {{ post.date | date: "%b %d" }} - [{{ post.title }}]({{ post.url }})
{% endfor %}
