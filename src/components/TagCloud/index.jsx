import { useState } from 'react';
import './style.css';

export const TagCloud = () => {
  const [newTag, setNewTag] = useState('');

  const [tags, setTags] = useState([
    'Založte',
    'novou',
    'React',
    'aplikace',
    'a',
    'vytvořte',
    'komponentu',
    'TagCloud',
  ]);
  return (
    <>
      <div className="tags-list">
        {tags.map((t, index) => (
          <div className="tag" key={index}>
            {t}
          </div>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTags([...tags, newTag]);
          setNewTag('');
        }}
      >
        <label>
          Zadejte nový tag:{' '}
          <input
            value={newTag}
            type="text"
            onChange={(e) => setNewTag(e.target.value)}
          />
        </label>
        <button type="submit" disabled={!newTag.trim()}>
          Odeslat
        </button>
      </form>
      <button
        onClick={() => {
          const clone = [...tags];
          clone.splice(0, 1);
          setTags(clone);
        }}
      >
        Odstranit první tag
      </button>
    </>
  );
};
