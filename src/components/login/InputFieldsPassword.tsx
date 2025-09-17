const InputFieldsPassword = () => (
  <div className="flex flex-col gap-4 w-full mt-6">
    <div className="flex flex-col gap-1">
      <label className="font-medium text-[var(--colors-text-text-secondary-700)] text-base">
        Agent code / Email id / Mobile no. / License no.
      </label>
      <input
        type="text"
        placeholder="24390745"
        className="w-full h-12 px-4 border border-[#C9D3E9] rounded-lg shadow-sm text-base focus:outline-none"
      />
    </div>
    <div className="flex flex-col gap-1 relative">
      <label className="font-medium text-[var(--colors-text-text-secondary-700)] text-base">
        Password
      </label>
      <input
        type="password"
        placeholder="XXXXXXXXX"
        className="w-full h-12 px-4 border border-[#C9D3E9] rounded-lg shadow-sm text-base focus:outline-none pr-10"
      />
      <span className="absolute right-4 top-9 text-[#B0B0B0] cursor-pointer">
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
          <path
            stroke="#B0B0B0"
            strokeWidth="2"
            d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z"
          />
          <circle cx="12" cy="12" r="3" stroke="#B0B0B0" strokeWidth="2" />
        </svg>
      </span>
    </div>
  </div>
);

export default InputFieldsPassword;
