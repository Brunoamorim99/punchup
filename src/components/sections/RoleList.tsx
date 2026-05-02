type RoleListProps = {
  roles: readonly string[];
};

export function RoleList({ roles }: RoleListProps) {
  return (
    <ul
      className="mt-8 flex flex-wrap gap-3"
      style={{ fontFamily: '"Manrope", sans-serif' }}
    >
      {roles.map((role) => (
        <li
          key={role}
          className="rounded-full border border-gray-300 px-4 py-1.5 text-sm text-gray-500 transition-all duration-300 hover:border-[var(--accent-pink)] hover:text-[var(--accent-pink)] dark:border-gray-700 dark:text-gray-400"
        >
          {role}
        </li>
      ))}
    </ul>
  );
}
