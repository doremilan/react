function MemoItem({ children, onClickItem, onClickDelete, isSelected }) {
  return (
    <div
      className={'MemoItem' + (isSelected ? ' selected' : '')}
      onClickItem={onClickItem}
    >
      {children}
      <button className="MemoItem__delete-button" onClickDelete={onClickDelete}>
        X
      </button>
    </div>
  );
}

export default MemoItem;
