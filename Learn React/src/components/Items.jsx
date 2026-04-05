const Items = () => {
  const aadhar = false;
  const gmail=true;
  return (
    <>
      {aadhar && <h1>You can create bank account</h1>}
      {gmail && <h1>You can create Gmail account</h1>}
    </>
  );
};
export default Items;
