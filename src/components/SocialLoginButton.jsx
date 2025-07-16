const SocialLoginButton = ({ provider, icon, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-web-green-500"
    >
      {icon}
      {provider}
    </button>
  )
}

export default SocialLoginButton
