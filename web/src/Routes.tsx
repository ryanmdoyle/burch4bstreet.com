// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import MessagePage from 'src/pages/MessagePage/MessagePage'
import MessagesPage from 'src/pages/MessagesPage/MessagesPage'
import NewMessagePage from 'src/pages/NewMessagePage/NewMessagePage'
import EditMessagePage from 'src/pages/EditMessagePage/EditMessagePage'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/comingsoon" page={ComingSoonPage} name="comingSoon" />
      <Set wrap={[MainLayout]}>
        <Route path="/show-support" page={ShowSupportPage} name="showSupport" />
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
      <Private unauthenticated="home" role="ADMIN">
        <Route path="/messages" page={MessagesPage} name="messages" />
        <Route path="/message/" page={MessagePage} name="message" />
        <Route path="/new-message" page={NewMessagePage} name="newMessage" />
        <Route
          path="/edit-message/{id}"
          page={EditMessagePage}
          name="editMessage"
        />
      </Private>
    </Router>
  )
}

export default Routes
