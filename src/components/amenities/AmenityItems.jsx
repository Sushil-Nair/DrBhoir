export default function AmenityItem({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 text-gray-700">
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </div>
  );
}