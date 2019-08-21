<!-- Start seamless-pagination custom code -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.pjax/2.0.1/jquery.pjax.min.js"></script>
<script>
  var containerSelector = '#seamless-replace';
  $(document).pjax(
    '.w-pagination-wrapper a',
    containerSelector,
    {
      container: containerSelector, 
      fragment: containerSelector,
      scrollTo: false,
      timeout: 2500,
    }
  );
  // These 3 lines should reinitialize interactions
  $(document).on('pjax:end', function() {
    Webflow.require('ix2').init();
  });
</script>
<!-- End seamless-pagination custom code -->
