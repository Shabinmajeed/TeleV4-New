interface AvatarProps {
  src?: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
}

export default function Avatar({ src, name, size = 'md', className = '' }: AvatarProps) {
  const sizes = { sm: 'w-8 h-8 text-xs', md: 'w-9 h-9 text-sm', lg: 'w-[75px] h-[75px]' };

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className={`rounded-full object-cover bg-[var(--border-light)] ${sizes[size]} ${className}`}
      />
    );
  }

  return (
    <div className={`rounded-full bg-[#3b82f6] text-white flex items-center justify-center font-bold ${sizes[size]} ${className}`}>
      {getInitials(name)}
    </div>
  );
}
