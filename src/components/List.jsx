import React from "react";

export default function List() {
  return (
    <main>
      <ul>
        <li>
          <input type="checkbox" value="test" />
          test
          <button>삭제</button>
        </li>
        <li>
          <input type="checkbox" value="abc" />
          abc <button>삭제</button>
        </li>
        <li>
          <input type="checkbox" value="tdef" />
          def <button>삭제</button>
        </li>
      </ul>
    </main>
  );
}
