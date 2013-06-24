---
published: true
layout: "default-theme-ogpl-en"
permalink: "governance-en.html"
filename_root: governance
title: OGPL Governance on Github
description: English description / Description en anglais
modified: "Date modified (YYYY-MM-DD) / Date de modification (AAAA-MM-JJ)"
---

## Overview

The Open Government Platform (OGPL) project is hosted on GitHub through the OGPL GitHub organization. The goal of this project is to manage and group in one location the contributions of code, governance, and associated information to OGPL from several countries (including India, Canada, Ghana, and the U.S.), as well as the contributions from individuals.  Background information about OGPL is available.

The majority of documents, content, discussions, and issues related to the OGPL project on GitHub will be managed through the main OGPL GitHub repository.

The primary component of OGPL comprises:

- Open Government Platform Base 
- Base code for an open government site, data management, system, citizen engagement, communities of practice

In addition, the OGPL project incorporates several projects that are external to the OGPL GitHub organization. Although these projects are not part of the OGPL organization on GitHub, all are incorporated under GitHub. 

- CKAN Data Management System
- Web Experience Toolkit (WET)
- WET Drupal Distribution
- WET CKAN Theme
- WET CKAN API Helper

In the future, the OGPL project may incorporate other projects either under or external to the OGPL GitHub organization.

## Ways People Can Contribute to OGPL

There are multiple ways people can contribute to the OGPL project:

1. Starting a discussion or submitting a question, comment or issue through the main OGPL issue tracker. Discussions, questions, comments, and issues related to an incorporated project should be submitted directly through that project.
2. Flagging irrelevant, obscene, illegal, or insulting posts to the OGPL Project Coordination Team. Posts can be flagged by posting the relevant details on the issue tracker and including @ogpl-project-coordination-team in the post. Alternatively, details can be submitted to the following email address: [email address to be determined]
3. Helping to improve OGPL documents and content through one of the following approaches:
   - Submitting changes using the Prose content editor. There will be a link to the editor from all OGPL documents and content. An example where the same approach is used is Project Open Data.
   - Forking the OGPL repository, editing the files directly, and submitting any changes through a pull request. For more details, see GitHub’s Fork A Repo help page.
   - Submitting suggestions, comments, and issues through the main OGPL issue tracker.
4. Helping to improve OGPL project code through one of the following approaches:
   - Forking the relevant project repository, editing the files directly, and submitting changes through a pull request. For more details see GitHub’s Fork A Repo help page.
   - Submitting suggestions, ideas for improvement or clarification, comments, and issues through the issue tracker of the relevant project repository.

## Managing Contributions

The following describe how contributions to the main OGPL repository are managed. Contributions to an incorporated project may be managed differently, so refer to that project’s documentation for details on how contributions are managed.

## OGPL Project Coordination Team

The OGPL Project Coordination Team is responsible for the day-to-day management of OGPL questions, comments, issues, and other contributions. Team members will be identified by the OGPL Management Board. Tasks include:

- Removing posts from the main OGPL issue tracker that are irrelevant, obscene, illegal, or insulting.
- Coordinating responses to questions, comments, and issues submitted through the main OGPL issue tracker where a response is warranted, including applying GitHub labels. Appropriate OGPL Sub-Project Leads and Subject Matter Experts will be bridged in and/or assigned as needed. Bridging in will be accomplished by including the related GitHub handle(s) in a post (e.g., @githubhandle) and assigning will be accomplished by using the associated issue tracker feature.
- Managing contributions through suggestions, submitted changes, and pull requests. Appropriate OGPL Sub-Project Leads and Subject Matter Experts will be bridged in and/or assigned as needed. Any contributions that involve significant risk, effort, or changes to functionality will be escalated to the OGPL Management Board for review.

## OGPL Sub-Project Leads

OGPL Sub-Project Leads are responsible for the day-to-day management of individual OGPL sub-projects. Sub-projects are meant to accomplish specific tasks for OGPL and have defined start and end dates. For example, defining a new meta-data standard for OGPL. 

Sub-projects and the associated leads will be identified by the OGPL Management Board. Tasks for each assigned sub-project include:

- Developing timelines, coordinating tasks, and managing sub-project resources. Where feasible, GitHub milestones should be used.
- Providing regular updates on sub-project progress and issues to the OGPL Management Board.
- Responding to questions, comments, and issues on the main OGPL issue tracker that are related to the sub-project.
- Reviewing, responding to, and recommending a course of action for each contribution related to the sub-project.

## OGPL Subject Matter Experts

OGPL Subject Experts are responsible for providing responses and recommendations for the assigned subject matter (e.g., machine readability, metadata, accessibility, and usability). Subject Matter Experts will be identified by the OGPL Management Board. Each of the incorporated projects will be represented with a subject matter expert as well. Tasks include:
- Responding to questions, comments, and issues on the main OGPL issue tracker that are related to the assigned subject matter.
- Reviewing, responding to, and recommending a course of action for each contribution related to the assigned subject matter.

## OGPL Management Board

The OGPL Management Board is responsible for the overall governance and management of the OGPL project. The Board includes at least one representative from each of the countries that are an active member and contributor for the OGPL project. Tasks include:

- Reviewing and approving changes to this document and the terms of reference. Terms of reference to be defined.
- Identifying members of the OGPL Project Coordination Team. 
- Reviewing and determining a course of action for each contribution that is escalated by the OGPL Project Coordination Team.
- Identifying OGPL sub-projects and associated leads.
- Reviewing and approving the proposed timelines, tasks, and resource requirements for each sub-project.
- Identifying OGPL Subject Matter Experts.
- Ensuring appropriate security, accessibility, and usability issues are responded to and highlighted.
- Developing strategies for growing and supporting the OGPL community.

## Managing Code on GitHub

The OGPL project will manage code according to the GitHub Workflow. This process assumes that individual projects are managed by their owners and the owners review and approve any code or documentation changes before they are committed to the main repository. This helps maintain quality control and ensures that the project stays on track, but also encourages other contributors to “fork” their own copies of the repository and experiment or suggest improvements.  Remember in creating forks to provide documentation and related material to help users understand the contribution that is being made.

GitHub flow works as follows:
1. Anything in the master branch of the repository should be deployable (although in practice this may sometimes break during intense development phases).
2. To work on the repository, create a fork of the project, and clone it locally.
3. To work on something in the project, create a descriptively named branch off of the fork.
4. When the work is ready for review, push the branch to the forked repository on GitHub.
5. Issue a Pull request for the branch from the fork to the master branch of the repository from which it was forked.
6. The owners of the original repository will receive a notice of the pull request. Then they can review, suggest improvements if necessary, and finally merge the change into the master branch.

For a more detailed explanation of the workflow, the CKAN documentation describes in detail the process for contributing to CKAN using the GitHub workflow. 

## Automating Project Tasks

Project tasks will be automated where possible to minimize the resources needed to manage and maintain the OGPL project. Project tasks will be automated using Travis CI, a hosted continuous integration service that is integrated with GitHub. Travis CI provides the ability to automatically build and test code every time there is a pull request or change to a repository. This approach can be used to automatically compile project files, simplify code reviews and detect bugs early on by ensuring that builds and tests are run every time the project is modified.

Some of the quality assurance tools that will be run automatically are JSHint for detecting JavaScript erorrs and enforcing code conventions and CSSLint to help validate CSS.

## Community Activities and Meetings

OGPL communications and collaboration will allow for interactions on the Github repository as noted above, but will extend to other virtual options. These will include, but not be limited to:

1. Recurring virtual meetings for the management board.
2. Recurring virtual meetings for the OGPL community.
3. Periodic virtual meetings for subject areas of interest.

Meetings will occur online and will be captured through online minutes and/or recordings, and shared with the community.

## References
1. Organizations in GitHub: https://github.com/blog/674-introducing-organizations
2. GitHub Workflow: http://scottchacon.com/2011/08/31/github-flow.html
3. CKAN GitHub workflow: https://github.com/okfn/ckan/blob/master/CONTRIBUTING.rst
4. GitHub Pages: https://help.github.com/articles/what-are-github-pages 
5. Travis CI (continuous integration): http://about.travis-ci.org/docs/ 
6. JSHint Javascript test tool: http://jshint.com/about/ 
7. CSSLint CSS validation tool: https://github.com/stubbornella/csslint 
8. Theme 44 from the Whitehouse: http://drupal.org/project/fortyfour 