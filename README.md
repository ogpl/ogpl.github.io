Français - https://github.com/ogpl/ogpl/wiki/Utiliser-GitHub-pour-h%C3%A9berger-un-projet-de-donn%C3%A9es-ouvertes

GitHub is a web-based hosting service for projects that use the Git revision control system. GitHub allows individuals or organizations to have public or private code repositories. Individuals, and developers in particular, will create an account on GitHub to house the source code and documentation for their projects. Organizations simplify management of group-owned repositories, have a their own permissions system, and help focus the GitHub workflow for large open source projects.
 
For large projects, a GitHub organization can gather not just projects maintained by that organization, but also forks (which are linked copies) of other projects that are relevant to the organization. Organizations can manage their own repositories and link to specific versions of other projects in order to present all the necessary components for an open data project in one location.
 
One example of such an organization was set up at https://github.com/ogpl. This is only for demonstration purposes and should not be used at this time for production work. This organization contains forks of:
-     the Open Government Platform (https://github.com/opengovplatform/opengovplatform-beta)
-     CKAN Data Management System (https://github.com/okfn/ckan)
-     Web Experience Toolkit (https://github.com/wet-boew/wet-boew)
-     WET Drupal Distribution (https://github.com/wet-boew/wet-boew-drupal)
-     WET CKAN Theme (https://github.com/ogpl/ckanext-wet-boew)
 
Other relevant projects can be added directly to the organization or be forked from other organizations.
 
## Working With GitHub
 
The current best practice for using GitHub is a process referred to as the GitHub Workflow. This process assumes that individual projects are managed by their owners and the owners review and approve any code or documentation changes before they are committed to the main repository. This helps maintain quality control and ensures that the project stays on track, but also encourages other contributors to ‘fork’ their own copies of the repository and experiment or suggest improvements.
 
The GitHub flow works like this:
- 1      Anything in the master branch of the repository should be deployable (although in practice this may sometimes break during intense development phases)
- 2      To work on the repository, create your own fork of the project, and clone it locally.
- 3      To work on something in the project, create a descriptively named branch off of your fork.
- 4      When your work is ready for review, push your branch to your forked repository on GitHub
- 5      Issue a Pull request for your branch from your fork to the master branch of the repository that you forked from.
- 6      The owners of the original repository will receive a notice of the pull request. Then they can review, suggest improvements if necessary, and finally merge your change into the master branch.
 
For a more detailed explanation of the workflow, the CKAN documentation describes in detail the process for contributing to CKAN using the GitHub workflow.
 
## Automated Management Tools
 
One of the more powerful features of GitHub is the ability to automate various project tasks to help improve the quality of the project. GitHub also allows organizations to automatically provide on-line documentation using GitHub pages.
 
One of the most used project tools is Travis CI, which is a hosted continuous integration service for the Open Source community and is integrated into GitHub. Travis CI provides multiple environments and programming languages which can be tested against automatically every time new code is committed to your repository. Continuous integration testing helps detects bugs early on by ensuring that a basic test suite is run every time the project is modified.
 
Other quality assurance tools that can be incorporated into the test suites automatically run by Travis CI, for example: JSHint which detect errors and can enforce code conventions, or CSSLint to help validate your CSS.
 
References:
 
- Organizations in GitHub: https://github.com/blog/674-introducing-organizations
- GitHub Workflow: http://scottchacon.com/2011/08/31/github-flow.html
- CKAN GitHub workflow: https://github.com/okfn/ckan/blob/master/CONTRIBUTING.rst
- GitHub Pages: https://help.github.com/articles/what-are-github-pages
- Travis CI (continuous integration): http://about.travis-ci.org/docs/
- JSHint Javascript test tool: http://jshint.com/about/
- CSSLint CSS validation tool: https://github.com/stubbornella/csslint
- Theme 44 from the Whitehouse: http://drupal.org/project/fortyfour
