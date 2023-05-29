$(document).ready(function () {
  $(".ADETicketSlide").slick({
    infinite: true,
    slidesToShow: 3,
    arrows: true,
    autoplay: true,
  });

  $(".ADETicketSortBoxCurrent").click(function () {
    const options = $(".ADETicketSortBoxOptions");
    if (options.css("display") === "block") {
      options.css("display", "none");
    } else {
      options.css("display", "block");
    }
  });

  $(".ADETicketDetailDescription").css({ height: "100px", overflow: "hidden" });

  $(".ADETicketExpandButton").click(function () {
    const isExpand = $(".ADETicketDetailDescription");
    if (isExpand.css("height") === "100px") {
      $(".ADETicketDetailDescription").css("height", "auto");
      $(".ADETicketExpandButton").text("Thu gọn");
    } else {
      $(".ADETicketDetailDescription").css("height", "100px");
      $(".ADETicketExpandButton").text("Mở rộng");
    }
  });

  $(".ADETicketOptionPolicyWrap").css("display", "none");

  $(".ADETicketArrowDownSection").click(function () {
    const id = $(this).closest(".ADETicketOption").attr("id");
    const detailSection = $(`#${id} .ADETicketOptionPolicyWrap`);
    const icon = $(".ADETicketArrowDownIcon");
    if (detailSection.css("display") === "none") {
      detailSection.css("display", "block");
      icon.addClass("ADETicketArrowDownActive");
    } else {
      detailSection.css("display", "none");
      icon.removeClass("ADETicketArrowDownActive");
    }
  });

  $(".ADETicketBackButton").click(function () {
    window.location.href = window.location.origin + "/ticketpool.html";
  });
  $(".ADETicketItem").click(function () {
    window.location.href = window.location.origin + "/ticketdetail.html";
  });
  $(".ADETicketOptionSelect").click(function () {
    window.location.href =
      window.location.origin + "/ticketcustomerdetail.html";
  });
});
