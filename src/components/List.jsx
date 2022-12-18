import React from "react";
import style from "./List.module.css";
import { MdDeleteForever } from "react-icons/md";

export default function List() {
  return (
    <main>
      <ul>
        <li>
          <div>
            <input type="checkbox" value="test" id="test" />
            <label for="test">test</label>
          </div>
          <button className={style.remove}>
            <MdDeleteForever />
          </button>
        </li>
        <li>
          <div>
            <input type="checkbox" value="abc" id="abc" />
            <label for="abc">abc</label>
          </div>
          <button className={style.remove}>
            <MdDeleteForever />
          </button>
        </li>
        <li>
          <div>
            <input type="checkbox" value="def" id="def" />
            <label for="def">def</label>
          </div>
          <button className={style.remove}>
            <MdDeleteForever />
          </button>
        </li>
      </ul>
    </main>
  );
}
