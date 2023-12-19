function Item({ bg, title }) {
  return (
    <div>
      <img src="{bg}" alt="item" />
      <p>{title}</p>
    </div>
  );
}

export default Item;
