# CEIT Department Website (Pamantasan ng Lungsod ng Valenzuela)

## :pushpin: Overview

A website for the College of Engineering and Information Technology (CEIT) at Pamantasan ng Lungsod ng Valenzuela (PLV). The website will showcase department-related information, including faculty members, facilities, and activities.

## :bust_in_silhouette: Target Audience

- CEIT faculty and staff
- PLV students
- Prospective students, especially those interested in CEIT programs

## :hammer_and_wrench: Technologies Used

- **Frontend:** React (Vite), shadcn, Tailwind CSS 3.4.17 (I would've loved to use 4.0, the latest version, but it has breaking changes that shadcn has yet to adapt)
- **Backend:** (To be determined based on input and suggestion of features)
- **Database:** (To be determined based on input and suggestion of features, but I am eyeing MongoDB Atlas' free tier)
- **Version Control:** GitHub

## :building_construction: Setup & Installation

### Prerequisites
- Git
- GitHub
- [Node.js](https://nodejs.org/en) (We recommend the LTS or Long-Term Support version)
- NPM (included with Node.js)

### Steps
1. Navigate to a folder where you want the repository to be located at and enter this to clone the repository:
```
    git clone git@github.com:plvkyan/ceit-website.git
```
2. Navigate to the client folder:
```
    cd client
```
3. Install dependencies:
```
    npm install
```
4. Start the development server:
```
    npm run dev
```

> [!NOTE]
> The website will run at http://localhost:5173, if it's already in use, just add one (1) e.g. http://localhost:5174

## ::sparkles: Features

The websites features are currently under discussion, but here are some:
- Information about the CEIT department, its faculty members, facilities, and activities.
- Content Management System (CMS) for faculty to update information.

## :open_book: Contribution Guidelines

The developers behind this project is a team of four (4) students from the CEIT department of PLV. To ensure smooth collaboration, we follow these guidelines: 
1. **Branches**
    - main branch contains the stable version.
    - Create separate branches for new features or fixes e.g. feat/new-feature, fix/bug-name.
2. **Issues && Pull Requests**
    - Open an Issue for new tasks or bug reports.
    - Work on a separate branch and submit a Pull Request (PR).
    - All PRs require approval before merging into main. 
    - Make sure there are little to no merge conflicts before merging into main.
3. **Commit Message Guidelines**
    - Use descriptive messages following this [reference](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13#conventional-commit-messages-), eg:

    ```
        feat(home): Added faculty profiles section
    ```
    ```
        fix(about): Resolved navigation bar issue
    ```
    ```
        chore: Updated dependencies
    ```

## :scroll: License

This project is currently for internal use at Pamantasan ng Lungsod ng Valenzuela (PLV). A license is unlikely to be adopted as it won't likely be open-source. GitHub is only utilized for version control.

## :calendar: Plans

- Awaiting feedback for features.
- Development of initial prototype design.



:rocket: Developed by the CEIT Department at Pamantasan ng Lungsod ng Valenzuela (PLV)