import React from 'react';
import Navbar from '../Navbar/Navbar';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.props.onToggleDark();
  }

  render() {
    return (
      <header className="flex justify-between sm:justify-around items-center bg-gray-2 dark:bg-dark-1 py-3.5 px-5 border-b border-[#e1e3e1] sticky top-0 z-40">
        {/* logo */}
        <div>
          <a href="#">
            <img src="images/logo.png" className="w-[86px]" alt="logo" />
          </a>
        </div>

        {/*Navigation  */}
        <Navbar></Navbar>

        {/* light/dark mode */}
        <div className="flex items-center gap-1">
          <div
            className="cursor-pointer bg-primary text-white dark:text-light px-3 py-1.5 rounded-lg"
            onClick={this.handleToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" hidden dark:block w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="block dark:hidden w-6 h-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </div>
          <div className="cursor-pointer bg-primary text-white dark:text-light px-3 py-1.5 rounded-lg md:hidden relative">
            <label htmlFor="hamburger">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </label>
            <input type="checkbox" className="hidden" id="hamburger" />
            <div className="hidden">sum menu</div>
          </div>
        </div>
      </header>
    );
  }
}
