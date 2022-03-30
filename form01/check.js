function check()
{
	// đặt tên cho form là form
	var usename = f.TenDangNhap.value;
	var password = f.MatKhau.value;
	
	if(usename == '')
	{
		alert('Tên đăng nhập không được bỏ trống!');
		return false;
	}
	if(password == '')
	{
		alert('Mật khẩu không được bỏ trống!');
		return false;
	}
	return true;
}
