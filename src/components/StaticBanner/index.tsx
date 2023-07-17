import * as S from "./styles";

interface StaticBannerProps {
  URI: string;
  imgTitle: string;
}

export function StaticBanner({ URI, imgTitle }: StaticBannerProps) {
  return (
    <S.Container>
      <S.StaticImage src={URI} title={imgTitle} />
    </S.Container>
  );
}
