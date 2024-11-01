import React from "react";

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="https://www.facebook.com/">
            {" "}
            <i class="ri-facebook-circle-line text-gray-400"></i>
          </a>

          <a href="mailto:nelson_salas@usmp.pe" target="_blank">
            <i class="ri-mail-line text-gray-400 "></i>
          </a>
          <a href="/admin" target="_blank">
            <i class="ri-instagram-line text-gray-400 "></i>
          </a>
          <a href="https://www.linkedin.com/in/#" target="_blank">
            <i class="ri-linkedin-box-line text-gray-400 "></i>
          </a>
          <a href="https://github.com/nsalasz" target="_blank">
            <i class="ri-github-line text-gray-400 "></i>
          </a>
        </div>
        <div className="w-[1px] h-32 bg-[#125f63] sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSider;
