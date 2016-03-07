<%@ Page Title="" Language="C#" MasterPageFile="~/site-about.master" AutoEventWireup="true"
    CodeFile="gioi-thieu.aspx.cs" Inherits="gioi_thieu" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
    <title>VSPGas</title>
    <meta name="description" content="VSPGas" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphSite" runat="Server">
    <a id="A1" href="~/" runat="server" class="home">Trang chủ <span class="fa fa-caret-right">
    </span></a><a href="#">Giới thiệu <span class="fa fa-caret-right">
    </span></a><span>Giới thiệu</span>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <h2 class="title text-uppercase mobile-992"><a class="panel-right text-uppercase" href="#mobileRight">Giới thiệu<span class="icona glyphicon glyphicon-chevron-down"></span></a></h2>
    <h2 class="title text-uppercase desktop-992">Giới thiệu</h2>
    <div class="wrapper-text">
        <table cellpadding="0" cellspacing="0" width="100%">
            <tr>
                <td><p>- Tên đơn vị:</p></td>
                <td><p><strong>XÍ NGHIỆP KHAI THÁC CÁC CÔNG TRÌNH KHÍ</strong></p></td>
            </tr>
            <tr>
                <td><p>- Tên giao dịch quốc tế:</p></td>
                <td><p><strong>VSP Gas Enterprise – Viết tắt: VSPGas</strong></p></td>
            </tr>
            <tr>
                <td><p>- Địa chỉ:</p></td>
                <td><p>05 Lê Lợi, Vũng Tàu</p></td>
            </tr>
            <tr>
                <td><p>- Điện thoại:</p></td>
                <td><p>84-64-832383</p></td>
            </tr>
            <tr>
                <td><p>- Fax:</p></td>
                <td><p>84-64-832384</p></td>
            </tr>
            <tr>
                <td><p>- Website: </p></td>
                <td><p>...</p></td>
            </tr>
            <tr>
                <td><p>- Logo: </p></td>
                <td><p><img src="assets/images/logo-about.jpg" alt=""/></p></td>
            </tr>
        </table>
    </div>
</asp:Content>
