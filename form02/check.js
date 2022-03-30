function check()
{
	var ht= f.HoTen.value;
	var dc= f.DiaChi.value;
	var em = f.EMAIL.value;
	var dt = f.DienThoai.value;
	
	var emRegExp = /^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/
	var dtRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
	
	if(ht=='')
	{
		alert('Họ tên không được bỏ trống!');
		return false;
	}
	if(dc =='')
	{
		alert('Địa chỉ không được bỏ trống!');
		return false;
	}
	if(em=='')
	{
		alert('Emailkhông được bỏ trống!');
		return false;
	}
	if(dt== '')
	{
		alert('Điện thoại không được bỏ trống!');
		return false;
	}
	if(!emRegExp.test(em))
	{
		alert('Email không hợp lệ.');
		return false;
	}
	return true;
}