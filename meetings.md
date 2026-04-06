# Meeting Guidelines

The ROOST community hosts meetings for open source projects, including office hours and working groups. While how each meeting is run is ultimately up to the specific project leadership or meeting chair, here are best practices we try to follow.

Oftentimes community events are a mix of office hours and working group meetings, but for reference:

- **Office Hours**: provide community face-to-face time, answer questions, support (potential) adopters

- **Working Group**: advance the open source project/development, make decisions, discuss a specific project or initiative

## Calendar events

All ROOST community meetings should be added to the [ROOST Community calendar] ([iCal URL]). If you're hosting a community event and do not have access to add events to the calendar, [create an issue](https://github.com/roostorg/community/issues/new?template=community-event.yaml) and we'll get you sorted.

Online/virtual or hybrid events should use Google Meet on the calendar event provided by ROOST.

Calendar event descriptions should link to the relevant GitHub Discussions category for the associated project (not the individual event agenda Discussion, as it would need to be updated for each occurrence).

Specific attendees may be added to calendar events by email if requested. Otherwise, attendees may view the [ROOST Community calendar] online, add it to their Google Calendar using the link at the bottom of that page, or subscribe via [iCal URL].

### Discord events

Discord events should be created for each community event for extra visibility. Use the full Google Meet URL (including `https://`) for the location, enter the time and date in your current timezone, set the event frequency for recurring events, and enter a description (copy-paste from the community calendar event).

**Note that Discord does not handle daylight savings!** Event times seem to be calculated based on UTC regardless of the timezone used when creating them, so you may need to edit or delete/recreate events after DST-related time changes.

## Agenda & announcement

Individual meetings should be announced and their agendas open to comment at least 24 hours in advance on the relevant project's GitHub Discussions forum. For example:

- [Coop Working Group Meetings](https://github.com/roostorg/coop/discussions/categories/working-group-meetings)
- [Model Community Office Hours](https://github.com/roostorg/model-community/discussions/categories/office-hours)
- [Osprey Working Group Meetings](https://github.com/roostorg/osprey/discussions/categories/working-group-meetings)

The meeting chair or organizer should also post a reminder in the relevant Discord channel for added visibility, around 24 hours in advance and again around one hour in advance.

## Notes

The meeting chair or organizer should copy the agenda from the GitHub Discussion (including relevant community-proposed topics, at their discretion) into a collaborative working notes document, i.e. via Google Docs. Working notes documents may be publicly editable, and thus should not be linked to publicly/widely to avoid abuse.

During a meeting, notes should be taken collaboratively following [Chatham House Rule](https://en.wikipedia.org/wiki/Chatham_House_Rule); when in doubt, ask if something should be noted or not. Share the link in the meeting chat and ensure edit access. The meeting chair or organizer may want to share their screen with the notes as well.

Shortly after the meeting, the chair or organizer should copy the notes into a comment on the event's GitHub Discussion for visibility, lightly editing if necessary. Other attendees may respond to the posted notes with any clarifications or additions.

### Tips

To share as Markdown, select the notes and choose "Copy as Markdown" from the Google Docs context menu. Note that Google Docs aggressively adds `\` escape characters even when unnecessary; you may want to edit the resulting Markdown before posting.

Since notes are published to GitHub Discussions, take advantage of GitHub-specific Markdown features like issue/PR linking by number (`#123`) and GitHub username @-mentions.

Google Docs task assignment can be handy for ROOST employees, but is not as useful for other attendees. Instead, try to @-mention GitHub usernames in the notes for actions items when possible.


[ROOST Community calendar]: https://calendar.google.com/calendar/embed?src=c_2f68741c36f377105f86dd8835d9469c0949d3abc9f2adc408e92095977a20dd%40group.calendar.google.com
[iCal URL]: https://calendar.google.com/calendar/ical/c_2f68741c36f377105f86dd8835d9469c0949d3abc9f2adc408e92095977a20dd%40group.calendar.google.com/public/basic.ics
