export default function InputFields({ name }) {
  return (
    <>
      <div className="pt-5">
        <label>{name}</label>
        <br />
        <input
          type="text"
          name={name}
          className="border-1 border-(--base-text) opacity-16 outline-none p-1 rounded-md w-[240px]"
        />
      </div>
    </>
  );
}
