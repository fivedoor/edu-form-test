#### Engineering @ One on One Marketing

# Front-End Developer Test

Thank you for your interest in joining One on One Marketing's engineering team
as a Front-End Developer. This simple test will help us better understand your
skill level and coding practices.

## Instructions

### 1. Fork This Repository

If you don't already have a GitHub account you will need to register first. A
working knowledge of Git is necessary for working at One on One. If you need
some help, you can refer to the [online book][2].

### 2. Complete the User Stories

At One on One we use the agile development methodology [Scrum][1]. If you are
unfamiliar with scrum, a user story represents an independent piece of work
written from the perspective of the user. This test consists of three small
stories (below). Please commit often as you make progress. Detailed commit
messages will help us learn more about how you work.

### 3. Make Any Additional Improvements (optional)

If you feel that any of the existing markup or CSS can be improved in any way
feel free to make changes. Our only request is that you make a separate commit
for each thing you change. In your commit message please include a short
  description of why it is an improvement.

### 4. Submit a Pull Request

After you have completed the changes to your work, you will submit a pull
request. This is how you submit your test. You may receive feedback in the
comments of the pull request, or at the very least, a confirmation that we
received your work and will review it.

## User Stories

### Add Current Education Level Field

As a visitor of the landing page, I need to be asked an additional question
called "Current Education Level". The question should appear last and allow me
to select from the following options with **radio buttons**:

- High School Diploma
- Associate Degree
- Bachelor Degree
- Master Degree
- Doctoral Degree

**More Advanced** (optional): These options may change in the future and are
available via an API. Make a JSONP request to `http://fedtest.aws.af.cm/` and
populate the options in the form using the result.

### Add JavaScirpt Validation

As a person filling out the form on the landing page I need to receive feedback
ensuring I complete the form according to the following validation rules:

- All fields are required
- The phone number must be in the format of *(xxx) xxx-xxxx*
- The email address must be valid

### Make Layout Responsive for Mobile Devices

As a visitor of the landing page on a mobile device of any size, the page layout
needs to be optimal for my device without being redirected to a different page.
The layout must always:

- Match the current style
- Make sure text can be read easily without zooming or horizontal scrolling
- Ensure the form is prominent and easy to fill out

## Questions?

If you have any questions or need clarification on any of the requirements
please submit an issue on this repository. We will try to respond as soon as
possible.

[1]: http://en.wikipedia.org/wiki/Scrum_(development)
[2]: http://git-scm.com/book
